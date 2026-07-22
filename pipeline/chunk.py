"""T6 — 청킹: 추출 JSON(문서 6종)을 장·절·지구 단위로 청킹 → chunks_raw.jsonl.

규칙(DESIGN.md 4.1):
- 장·절 경계 우선 분할, 본문은 800~1,500자 슬라이딩 윈도우(오버랩 15%)
- 위험지구 관리대장·위험요인 분석표 파일은 1지구=1청크(관리대장은 1지구 1쪽 카드)
- 대형 표(>30행)는 원자료 대신 요약(제목·행수·컬럼)만 유지 — 원자료는 rivers.json 담당
- 출처 페이지는 문서의 "장-쪽번호" 체계(예 3-403). 텍스트 헤더/푸터의 장-쪽 패턴을
  정규식으로 인식하고, 실패 시 앞뒤 페이지로 보간, 그래도 실패하면 물리 페이지 폴백
  (`page_label_fallback: true`). 요천(단일 603p)도 같은 방식으로 자동 매핑.
- 식별자: passage_id = PSG-{약어}-{장}-{쪽4자리}-{순번2자리} (전역 유일 assert)
          evidence_unit_id = EVD-{약어}-p{쪽4자리}
- skip 페이지(간지·이미지)는 청크 생성 제외, 카운트만 리포트.

실행: `python pipeline/chunk.py`  →  `data/processed/chunks_raw.jsonl`
"""

from __future__ import annotations

import json
import re
import sys
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from config import DOCUMENTS_BY_ID, PROCESSED_DIR  # noqa: E402

EXTRACTED_DIR = PROCESSED_DIR / "extracted"
CHUNKS_RAW_PATH = PROCESSED_DIR / "chunks_raw.jsonl"

# 슬라이딩 윈도우 파라미터 (DESIGN.md 4.1)
WIN_MIN = 800          # 최소 청크 길이
WIN_MAX = 1500         # 최대 청크 길이
WIN_OVERLAP = 0.15     # 오버랩 비율
SEG_MERGE_MIN = 200    # 이보다 짧은 절 조각은 직전 조각에 병합
CHUNK_EMIT_MIN = 60    # 이보다 짧은 청크는 폐기(카운트만)
BIG_TABLE_ROWS = 30    # 이 행수 초과 표는 요약만 유지

# ---------------------------------------------------------------------------
# 장-쪽번호 라벨 패턴
# ---------------------------------------------------------------------------

#: "2 - 3" · "3-403" · "A - 18" · "C - 102" (장 토큰 + 쪽)
RE_LABEL_CHAP = re.compile(r"^\s*([0-9]{1,2}|[A-Z])\s*-\s*([0-9]{1,4})\s*$")
#: "- 6 -" (장 토큰 없는 일련 쪽번호 — 의왕 요약본·관리대장)
RE_LABEL_PLAIN = re.compile(r"^\s*-\s*([0-9]{1,4})\s*-\s*$")
#: "(제3쪽)" (남원 작성서식)
RE_LABEL_FORM = re.compile(r"^\s*\(제([0-9]{1,4})쪽\)\s*$")
#: "- vii -" (권두부 로마자 쪽번호)
RE_LABEL_ROMAN = re.compile(r"^\s*-\s*[ivxlcdm]+\s*-\s*$", re.IGNORECASE)

#: 절 표제 "3.2 내수재해 위험지구" (장 번호 일치 검증은 호출부)
RE_SECTION = re.compile(r"^\s*(\d{1,2}\.\d{1,2}(?:\.\d{1,2})?)\s+(\S.{0,60})$")

#: 표 캡션 "<표 2.3-1> …" · "【표 1.3-28】…"
RE_TABLE_CAP = re.compile(r"[<【]\s*표\s*[\d\.\-— ]*[>】]")

#: 위험지구 표제 — "A.18 송곡천지구"(구미 관리대장) · "A-01. 안양천지구(하천재해)"(의왕 관리대장)
RE_DIST_LEDGER = re.compile(r"^\s*[A-Z][\.\-]\s*\d{1,3}\.?\s*(\S.*지구\S*.*?)\s*$")
#: 위험지구 표제 — "152) 보축우5지구"(분석표)
RE_DIST_NUM = re.compile(r"^\s*\d{1,3}\)\s*(\S.*지구\S*)\s*$")

#: 제어문자·사설영역(PUA) 글리프 — 불릿()·구분자(\x01) 등 PDF 아티팩트
RE_JUNK = re.compile(r"[\x00-\x08\x0b-\x1f-]")

#: 러닝 헤더/푸터(문서 제목·장 제목·시명·GMC 'c' 아티팩트) — 앞뒤 6줄에서만 제거
RE_HEADERS = [
    re.compile(r"^제?\s*\d*\s*차?\s*(구미시|의왕시|남원시)?\s*자연재해\s*저감\s*종합\s*계획.{0,20}$"),
    re.compile(r"^자연재해저감\s*종합\s*계획\s*관리대장$"),
    re.compile(r"^(구미시|의왕시|남원시)$"),
    re.compile(r"^(?!\d)\S.{0,24}하천기본계획.{0,15}$"),
    re.compile(r"^제\s*\d+\s*장\s*.{0,42}$"),
    re.compile(r"^c$"),
    re.compile(r"^[A-Z]\.\s*위험지구\s*후보지\s*위험요인\s*분석.{0,10}$"),
]

# ---------------------------------------------------------------------------
# 파일별 청킹 규칙 (mode: body=본문 슬라이딩 / district=1지구 1청크)
# ---------------------------------------------------------------------------


@dataclass(frozen=True)
class FileRule:
    mode: str                        # "body" | "district"
    chapter: str | None              # 장 토큰(passage_id 세그먼트). None → 페이지 라벨에서 유도
    chapter_title: str | None        # 표시용 장 제목. None → 문서 내 자동 수집


_JGP_CH = {
    "1": "제1장 서론",
    "2": "제2장 기초조사 및 기초분석을 통한 예비후보지 대상 검토",
    "3": "제3장 자연재해 위험지구 선정 및 저감대책 수립",
    "4": "제4장 자연재해 저감대책 시행계획 수립",
    "5": "제5장 종합 및 활용방안",
}

FILE_RULES: dict[tuple[str, int], FileRule] = {
    # 구미시 저감계획
    ("SRC-GM-JGP-2021", 0): FileRule("body", "1", _JGP_CH["1"]),
    ("SRC-GM-JGP-2021", 1): FileRule("body", "2", _JGP_CH["2"]),
    ("SRC-GM-JGP-2021", 2): FileRule("body", "3", _JGP_CH["3"]),
    ("SRC-GM-JGP-2021", 3): FileRule("body", "4", _JGP_CH["4"]),
    ("SRC-GM-JGP-2021", 4): FileRule("body", "5", _JGP_CH["5"]),
    ("SRC-GM-JGP-2021", 5): FileRule("district", "A", "관리대장"),
    ("SRC-GM-JGP-2021", 6): FileRule("district", "C", "위험지구 후보지 위험요인 분석(하천재해)"),
    # 의왕시 저감계획
    ("SRC-UW-JGP-2022", 0): FileRule("body", "1", _JGP_CH["1"]),
    ("SRC-UW-JGP-2022", 1): FileRule("body", "2", _JGP_CH["2"]),
    ("SRC-UW-JGP-2022", 2): FileRule("body", "3", _JGP_CH["3"]),
    ("SRC-UW-JGP-2022", 3): FileRule("body", "4", _JGP_CH["4"]),
    ("SRC-UW-JGP-2022", 4): FileRule("body", "5", _JGP_CH["5"]),
    ("SRC-UW-JGP-2022", 5): FileRule("body", "SUM", "자연재해저감 종합계획 요약"),
    ("SRC-UW-JGP-2022", 6): FileRule("district", "MGT", "관리대장"),
    ("SRC-UW-JGP-2022", 7): FileRule("district", "E", "위험지구 후보지 위험요인 분석표"),
    # 남원시 저감계획
    ("SRC-NW-JGP-2022", 0): FileRule("body", "FORM", "수립 주요현황(작성서식 2)"),
    ("SRC-NW-JGP-2022", 1): FileRule("body", "1", _JGP_CH["1"]),
    ("SRC-NW-JGP-2022", 2): FileRule("body", "2", _JGP_CH["2"]),
    ("SRC-NW-JGP-2022", 3): FileRule("body", "3", _JGP_CH["3"]),
    ("SRC-NW-JGP-2022", 4): FileRule("body", "4", _JGP_CH["4"]),
    ("SRC-NW-JGP-2022", 5): FileRule("body", "5", _JGP_CH["5"]),
    # 요천 하천기본계획(단일 603p) — 장 토큰·제목은 페이지 라벨/헤더에서 자동
    ("SRC-YC-RVP-2021", 0): FileRule("body", None, None),
    # 구미천 하천기본계획
    ("SRC-GMC-RVP-2025", 0): FileRule("body", "1", "제1장 개요"),
    ("SRC-GMC-RVP-2025", 1): FileRule("body", "2", "제2장 유역 및 하천 현황"),
    ("SRC-GMC-RVP-2025", 2): FileRule("body", "3", "제3장 종합분석"),
    ("SRC-GMC-RVP-2025", 3): FileRule("body", "4", "제4장 하천 정비 및 관리 계획"),
    ("SRC-GMC-RVP-2025", 4): FileRule("body", "5", "제5장 투자계획 및 기대효과"),
    # 안양천 하천기본계획(변경) — plan_version 페이지 레코드에서 승계
    ("SRC-AYC-RVP-2020", 0): FileRule("body", "1", "제1장 하천기본계획(일부변경)"),
    ("SRC-AYC-RVP-2020", 1): FileRule("body", "2", "제2장 기수립 하천기본계획"),
}

#: 권두부(라벨 인식 전 표지·목차) 장 토큰
FRONT_TOKEN = "FM"
FRONT_TITLE = "권두부(표지·목차)"


# ---------------------------------------------------------------------------
# 페이지 라벨 스캔·보간
# ---------------------------------------------------------------------------


def detect_label(lines: list[str]) -> tuple[str, str | None, int | None] | None:
    """페이지 앞 6줄→뒤 6줄에서 장-쪽 라벨을 찾는다."""
    head = lines[:6]
    tail = lines[-6:] if len(lines) > 6 else []
    for line in head + tail:
        if RE_LABEL_ROMAN.match(line):
            return ("roman", None, None)
        m = RE_LABEL_CHAP.match(line)
        if m:
            return ("chap", m.group(1), int(m.group(2)))
        m = RE_LABEL_PLAIN.match(line)
        if m:
            return ("plain", None, int(m.group(1)))
        m = RE_LABEL_FORM.match(line)
        if m:
            return ("form", None, int(m.group(1)))
    return None


@dataclass
class PageMeta:
    page: dict                      # 원본 페이지 레코드
    tok: str | None = None          # 장 토큰("3"·"A"·"SUM"·"FM")
    num: int | None = None          # 쪽번호(장-쪽의 쪽)
    fallback: bool = False          # 물리 페이지 폴백 여부
    lines: list[str] = field(default_factory=list)  # 정리된 본문 줄

    @property
    def physical(self) -> int:
        return self.page["physical_page"]

    @property
    def out_num(self) -> int:
        return self.num if self.num is not None else self.physical

    @property
    def label(self) -> str:
        if self.fallback:
            return f"p{self.out_num}"
        if self.tok and self.tok not in (FRONT_TOKEN,):
            return f"{self.tok}-{self.out_num}"
        return str(self.out_num)


def clean_lines(text: str) -> list[str]:
    """러닝 헤더/푸터·쪽번호 라벨 줄을 앞뒤 6줄에서 제거한 본문 줄 목록."""
    lines = text.split("\n")
    n = len(lines)

    def is_furniture(line: str) -> bool:
        s = line.strip()
        if not s:
            return False
        for pat in (RE_LABEL_CHAP, RE_LABEL_PLAIN, RE_LABEL_FORM, RE_LABEL_ROMAN):
            if pat.match(s):
                return True
        return any(p.match(s) for p in RE_HEADERS)

    keep: list[str] = []
    for i, line in enumerate(lines):
        if (i < 6 or i >= n - 6) and is_furniture(line):
            continue
        keep.append(RE_JUNK.sub("", line).rstrip())
    return keep


def build_page_metas(pages: list[dict], rule: FileRule) -> list[PageMeta]:
    """파일 1개의 페이지 라벨을 스캔→보간→폴백 순으로 확정한다."""
    metas: list[PageMeta] = []
    for p in pages:
        m = PageMeta(page=p)
        if not p["skip"]:
            lines = p["text"].split("\n")
            found = detect_label(lines)
            if found and found[0] == "chap":
                m.tok, m.num = found[1], found[2]
            elif found and found[0] in ("plain", "form"):
                m.tok, m.num = rule.chapter, found[2]
            # roman·미검출 → 보간 단계로
            m.lines = clean_lines(p["text"])
        metas.append(m)

    # 두 페이지 라벨 사이 등간격 보간(같은 장 토큰 + 쪽 차이 == 물리 차이)
    known = [i for i, m in enumerate(metas) if m.num is not None]
    for a, b in zip(known, known[1:]):
        ma, mb = metas[a], metas[b]
        if ma.tok == mb.tok and (mb.num - ma.num) == (mb.physical - ma.physical):
            for i in range(a + 1, b):
                metas[i].tok = ma.tok
                metas[i].num = ma.num + (metas[i].physical - ma.physical)

    # 잔여 미확정: 장 토큰은 이전 라벨 승계(없으면 권두부), 쪽은 물리 페이지 폴백
    last_tok: str | None = None
    for m in metas:
        if m.num is not None:
            last_tok = m.tok
            continue
        m.tok = rule.chapter or last_tok or FRONT_TOKEN
        m.fallback = True
    return metas


def collect_chapter_titles(pages: list[dict]) -> dict[str, str]:
    """문서 내 "제N장 …" 헤더 줄에서 장 제목을 자동 수집한다(요천 등)."""
    counts: dict[str, Counter] = {}
    pat = re.compile(r"^제\s*(\d{1,2})\s*장\s*(\S.{0,38})$")
    for p in pages:
        if p["skip"]:
            continue
        for line in p["text"].split("\n")[:4]:
            m = pat.match(line.strip())
            if m:
                title = re.sub(r"\s+", " ", m.group(2)).strip()
                counts.setdefault(m.group(1), Counter())[title] += 1
    out: dict[str, str] = {}
    for tok, cnt in counts.items():
        out[tok] = f"제{tok}장 {cnt.most_common(1)[0][0]}"
    return out


# ---------------------------------------------------------------------------
# 표 처리
# ---------------------------------------------------------------------------


def process_tables(meta: PageMeta) -> list[dict]:
    """페이지 표를 캡션과 함께 정리. 대형 표(>30행)는 요약만 유지."""
    raw = meta.page.get("tables") or []
    if not raw:
        return []
    caps = [l.strip() for l in meta.page["text"].split("\n") if RE_TABLE_CAP.search(l)]
    out: list[dict] = []
    for i, rows in enumerate(raw):
        cap = caps[i] if i < len(caps) else None
        if len(rows) > BIG_TABLE_ROWS:
            out.append(
                {
                    "caption": cap,
                    "summarized": True,
                    "num_rows": len(rows),
                    "num_cols": max((len(r) for r in rows), default=0),
                    "columns": rows[0] if rows else [],
                    "note": "대형 표 — 원자료는 정형 데이터(rivers.json 등) 담당",
                }
            )
        else:
            out.append({"caption": cap, "rows": rows})
    return out


# ---------------------------------------------------------------------------
# 청크 조립
# ---------------------------------------------------------------------------


class ChunkWriter:
    """passage_id 발급·전역 유일성 관리·JSONL 축적."""

    def __init__(self) -> None:
        self.chunks: list[dict] = []
        self.seen_ids: set[str] = set()
        self._seq: dict[tuple[str, str, int], int] = {}
        self.dropped_tiny = 0

    def emit(
        self,
        *,
        doc: dict,
        abbr: str,
        metas: list[PageMeta],
        chapter_tok: str,
        chapter_title: str,
        section: str | None,
        content: str,
        tables: list[dict],
    ) -> None:
        content = content.strip()
        if len(content) < CHUNK_EMIT_MIN:
            self.dropped_tiny += 1
            return
        start, end = metas[0], metas[-1]
        key = (abbr, chapter_tok, start.out_num)
        self._seq[key] = self._seq.get(key, 0) + 1
        seq = self._seq[key]
        passage_id = f"PSG-{abbr}-{chapter_tok}-{start.out_num:04d}-{seq:02d}"
        assert passage_id not in self.seen_ids, f"passage_id 중복: {passage_id}"
        self.seen_ids.add(passage_id)

        chunk: dict = {
            "passage_id": passage_id,
            "evidence_unit_id": f"EVD-{abbr}-p{start.out_num:04d}",
            "source_asset_id": doc["source_asset_id"],
            "doc_title": doc["doc_title"],
            "chapter": chapter_title,
            "section": section,
            "page_start": start.out_num,
            "page_end": end.out_num,
            "page_label_start": start.label,
            "page_label_end": end.label,
            "page_label_fallback": bool(start.fallback or end.fallback),
            "physical_page_start": start.physical,
            "physical_page_end": end.physical,
            "file": start.page["file"],
            "content": content,
            "tables": tables,
        }
        pv = start.page.get("plan_version")
        if pv is not None:
            chunk["plan_version"] = pv
        self.chunks.append(chunk)


def section_heading(line: str, chapter_tok: str | None) -> str | None:
    """장 번호와 일치하는 절 표제("3.2 …")를 인식한다."""
    if not chapter_tok or not chapter_tok.isdigit():
        return None
    s = line.strip()
    if "····" in s or "…" in s:
        return None  # 목차 점선 줄
    m = RE_SECTION.match(s)
    if not m:
        return None
    if m.group(1).split(".")[0] != str(int(chapter_tok)):
        return None
    return f"{m.group(1)} {re.sub(r'[ ]+', ' ', m.group(2)).strip()}"


def find_break(text: str, lo: int, hi: int) -> int:
    """[lo, hi) 안에서 자연스러운 절단점(개행>문장끝>공백)을 찾는다."""
    cut = text.rfind("\n", lo, hi)
    if cut > lo:
        return cut
    cut = text.rfind("다. ", lo, hi)
    if cut > lo:
        return cut + 2
    cut = text.rfind(" ", lo, hi)
    if cut > lo:
        return cut
    return hi


def chunk_body_file(
    doc: dict,
    abbr: str,
    metas: list[PageMeta],
    rule: FileRule,
    auto_titles: dict[str, str],
    writer: ChunkWriter,
    table_assigned: set[int],
) -> None:
    """본문 파일: 장·절 경계 우선 분할 + 800~1,500자 슬라이딩 윈도우."""
    # 1) 절 경계로 조각(segment) 나누기 — 조각 = [(meta, 페이지 내 텍스트)]
    segments: list[dict] = []
    cur: dict | None = None
    cur_tok: str | None = None
    cur_section: str | None = None

    def new_segment(tok: str, section: str | None) -> dict:
        seg = {"tok": tok, "section": section, "pieces": []}
        segments.append(seg)
        return seg

    for m in metas:
        if m.page["skip"]:
            continue
        if m.tok != cur_tok:
            cur_tok, cur_section, cur = m.tok, None, None
        buf: list[str] = []
        for line in m.lines:
            head = section_heading(line, cur_tok)
            if head:
                if buf:
                    if cur is None:
                        cur = new_segment(cur_tok, cur_section)
                    cur["pieces"].append((m, "\n".join(buf)))
                    buf = []
                cur_section = head
                cur = new_segment(cur_tok, cur_section)
            buf.append(line)
        if buf:
            if cur is None:
                cur = new_segment(cur_tok, cur_section)
            cur["pieces"].append((m, "\n".join(buf)))

    # 2) 너무 짧은 조각은 직전 조각에 병합(같은 장 토큰일 때)
    merged: list[dict] = []
    for seg in segments:
        total = sum(len(t) for _, t in seg["pieces"])
        if merged and total < SEG_MERGE_MIN and merged[-1]["tok"] == seg["tok"]:
            merged[-1]["pieces"].extend(seg["pieces"])
        else:
            merged.append(seg)

    # 3) 조각별 슬라이딩 윈도우
    for seg in merged:
        pieces = seg["pieces"]
        if not pieces:
            continue
        bounds: list[tuple[int, int, PageMeta]] = []
        parts: list[str] = []
        pos = 0
        for m, t in pieces:
            parts.append(t)
            bounds.append((pos, pos + len(t), m))
            pos += len(t) + 1  # 결합 개행
        text = "\n".join(parts)
        tok = seg["tok"] or FRONT_TOKEN
        title = (
            rule.chapter_title
            or auto_titles.get(tok)
            or (FRONT_TITLE if tok == FRONT_TOKEN else f"제{tok}장")
        )

        start = 0
        n = len(text)
        while start < n:
            if n - start <= WIN_MAX:
                end = n
            else:
                end = find_break(text, start + WIN_MIN, start + WIN_MAX)
            piece = text[start:end]
            covered = [b for b in bounds if b[0] < end and b[1] > start]
            metas_cov = [b[2] for b in covered] or [pieces[0][0]]
            tables: list[dict] = []
            for mc in metas_cov:
                if id(mc) not in table_assigned and mc.page.get("tables"):
                    tables.extend(process_tables(mc))
                    table_assigned.add(id(mc))
            writer.emit(
                doc=doc,
                abbr=abbr,
                metas=metas_cov,
                chapter_tok=tok,
                chapter_title=title,
                section=seg["section"],
                content=piece,
                tables=tables,
            )
            if end >= n:
                break
            overlap = int((end - start) * WIN_OVERLAP)
            start = max(end - overlap, start + 1)


def chunk_district_file(
    doc: dict,
    abbr: str,
    metas: list[PageMeta],
    rule: FileRule,
    writer: ChunkWriter,
) -> int:
    """관리대장·위험요인 분석표: 지구 표제 페이지에서 시작해 1지구=1청크."""
    groups: list[dict] = []  # {"name": str|None, "metas": [PageMeta]}
    cur: dict | None = None
    for m in metas:
        if m.page["skip"]:
            continue
        name: str | None = None
        for line in m.lines[:10]:
            s = line.strip()
            dm = RE_DIST_LEDGER.match(s) or RE_DIST_NUM.match(s)
            if dm:
                name = re.sub(r"\s+", " ", dm.group(1)).strip()
                break
        if name is not None or cur is None:
            cur = {"name": name, "metas": []}
            groups.append(cur)
        cur["metas"].append(m)

    n_districts = 0
    for g in groups:
        gm: list[PageMeta] = g["metas"]
        content = "\n".join("\n".join(m.lines) for m in gm)
        tables: list[dict] = []
        for m in gm:
            if m.page.get("tables"):
                tables.extend(process_tables(m))
        section = g["name"] or "머리말"
        if g["name"]:
            n_districts += 1
        writer.emit(
            doc=doc,
            abbr=abbr,
            metas=gm,
            chapter_tok=rule.chapter or FRONT_TOKEN,
            chapter_title=rule.chapter_title or "관리대장",
            section=section,
            content=content,
            tables=tables,
        )
    return n_districts


# ---------------------------------------------------------------------------
# 메인
# ---------------------------------------------------------------------------


def doc_abbr(source_asset_id: str) -> str:
    """"SRC-GM-JGP-2021" → "GM-JGP"."""
    parts = source_asset_id.split("-")
    return f"{parts[1]}-{parts[2]}"


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

    if not EXTRACTED_DIR.is_dir():
        print(f"추출 산출물 없음: {EXTRACTED_DIR} — 먼저 pipeline/extract_pdf.py 실행")
        return 1

    writer = ChunkWriter()
    report: list[dict] = []

    for asset_id in DOCUMENTS_BY_ID:
        path = EXTRACTED_DIR / f"{asset_id}.json"
        if not path.is_file():
            print(f"[{asset_id}] 추출 JSON 누락 — 건너뜀: {path}")
            continue
        doc = json.loads(path.read_text(encoding="utf-8"))
        abbr = doc_abbr(asset_id)
        auto_titles = collect_chapter_titles(doc["pages"])

        n_before = len(writer.chunks)
        n_skip = sum(1 for p in doc["pages"] if p["skip"])
        n_body_pages = len(doc["pages"]) - n_skip
        n_labeled = 0
        n_fallback = 0
        n_districts = 0

        by_file: dict[int, list[dict]] = {}
        for p in doc["pages"]:
            by_file.setdefault(p["file_index"], []).append(p)

        table_assigned: set[int] = set()
        for fidx in sorted(by_file):
            rule = FILE_RULES.get((asset_id, fidx), FileRule("body", None, None))
            metas = build_page_metas(by_file[fidx], rule)
            for m in metas:
                if m.page["skip"]:
                    continue
                if m.fallback:
                    n_fallback += 1
                else:
                    n_labeled += 1
            if rule.mode == "district":
                n_districts += chunk_district_file(doc, abbr, metas, rule, writer)
            else:
                chunk_body_file(doc, abbr, metas, rule, auto_titles, writer, table_assigned)

        n_chunks = len(writer.chunks) - n_before
        rate = (n_labeled / n_body_pages * 100) if n_body_pages else 0.0
        report.append(
            {
                "source_asset_id": asset_id,
                "chunks": n_chunks,
                "districts": n_districts,
                "pages": len(doc["pages"]),
                "skip_pages": n_skip,
                "label_ok": n_labeled,
                "label_fallback": n_fallback,
                "label_rate": round(rate, 1),
            }
        )
        print(
            f"[{asset_id}] 청크 {n_chunks}개"
            f" (지구 {n_districts}) · 페이지 {len(doc['pages'])} (skip {n_skip})"
            f" · 장-쪽 매핑 {n_labeled}/{n_body_pages} ({rate:.1f}%) · 폴백 {n_fallback}"
        )

    # passage_id 전역 유일성(emit 시 assert와 이중 확인)
    ids = [c["passage_id"] for c in writer.chunks]
    assert len(ids) == len(set(ids)), "passage_id 전역 중복 발생"

    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    with CHUNKS_RAW_PATH.open("w", encoding="utf-8") as fp:
        for c in writer.chunks:
            fp.write(json.dumps(c, ensure_ascii=False) + "\n")

    total_chunks = len(writer.chunks)
    total_fallback_chunks = sum(1 for c in writer.chunks if c["page_label_fallback"])
    print("\n=== 청킹 요약 ===")
    for r in report:
        print(
            f"{r['source_asset_id']}: 청크 {r['chunks']} · 지구 {r['districts']}"
            f" · 장-쪽 매핑 {r['label_rate']}% (폴백 페이지 {r['label_fallback']})"
        )
    print(
        f"합계: 청크 {total_chunks} (폴백 청크 {total_fallback_chunks},"
        f" {total_fallback_chunks / total_chunks * 100:.1f}%)"
        f" · 미세 청크 폐기 {writer.dropped_tiny}"
        f" · passage_id 유일 {len(set(ids))}/{len(ids)}"
    )
    print(f"산출: {CHUNKS_RAW_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
