"""파이프라인 공통 설정 — 경로 상수·문서 6종 레지스트리.

- 원시자료 루트(읽기 전용): `자연재해저감종합계획 및 하천기본계획/`
- 산출 경로: `data/processed/` (.gitignore 대상), 수동 시드: `data/manual/`
- 식별자 체계(DESIGN.md 4.1): source_asset_id → evidence_unit_id → passage_id
- 남원시는 폴더명이 "전라남도"로 오기되어 있으나 실제는 전라북도(45190) — 경로는
  그대로 두고 메타 태깅만 교정한다.
- 안양천 `3.기타사항.pdf`는 스캔 이미지라 레지스트리에서 제외한다.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path

# ---------------------------------------------------------------------------
# 경로 상수
# ---------------------------------------------------------------------------

REPO_ROOT = Path(__file__).resolve().parent.parent

#: 원시자료 루트 — 읽기 전용. 이 폴더에 쓰기 금지.
RAW_ROOT = REPO_ROOT / "자연재해저감종합계획 및 하천기본계획"
RAW_JGP_ROOT = RAW_ROOT / "1. 자연재해"       # 자연재해저감종합계획
RAW_RVP_ROOT = RAW_ROOT / "2. 하천기본"       # 하천기본계획

#: 재난 메타 데이터 정의서·재난판단기준 원시자료(읽기 전용)
META_DEF_ROOT = REPO_ROOT / "재난 메타 데이터 정의서_재난판단기준"

DATA_DIR = REPO_ROOT / "data"
MANUAL_DIR = DATA_DIR / "manual"              # 수동 검수 시드(커밋 대상)
PROCESSED_DIR = DATA_DIR / "processed"        # 파이프라인 산출물(.gitignore)

CHUNKS_PATH = PROCESSED_DIR / "chunks.jsonl"  # 코퍼스 청크(문서 6종)
EXTRACT_REPORT_PATH = PROCESSED_DIR / "extract_report.json"  # 추출 리포트

# ---------------------------------------------------------------------------
# 재난 유형 (사업 기준 5종) — Event 코드 ↔ 재난메타 T코드
# ---------------------------------------------------------------------------

HAZARD_CODES: dict[str, str] = {
    "HEAVY_RAIN": "T10107",   # 호우
    "FLOOD": "T10206",        # 홍수
    "INUNDATION": "T10106",   # 수해/침수
    "TYPHOON": "T10105",      # 태풍
    "LANDSLIDE": "T10401",    # 산사태
}

# ---------------------------------------------------------------------------
# 문서 레지스트리
# ---------------------------------------------------------------------------

DOC_TYPE_JGP = "자연재해저감종합계획"
DOC_TYPE_RVP = "하천기본계획"


@dataclass(frozen=True)
class SourceFile:
    """레지스트리에 등록된 원본 PDF 1개."""

    path: Path                      # 절대 경로
    plan_version: str | None = None  # 안양천 등 기수립/금회 구분("2015"|"2020")


@dataclass(frozen=True)
class SourceDocument:
    """원본 문서 자산(source_asset_id 단위)."""

    source_asset_id: str
    doc_title: str
    doc_type: str                   # DOC_TYPE_JGP | DOC_TYPE_RVP
    publisher: str
    admin_code: str                 # 행정구역코드(ARU-04)
    admin_name: str
    files: tuple[SourceFile, ...]
    river_name: str | None = None   # 하천기본계획만
    river_grade: str | None = None  # "국가" | "지방" (하천기본계획만)
    notes: str | None = None


def _jgp(*parts: str) -> Path:
    return RAW_JGP_ROOT.joinpath(*parts)


def _rvp(*parts: str) -> Path:
    return RAW_RVP_ROOT.joinpath(*parts)


# -- 1. 구미시 자연재해저감종합계획(2021.9) ---------------------------------
_GM_BASE = ("경상북도 구미시(2021.9.)", "경상북도 구미시(2021.9.)")

DOC_GM_JGP = SourceDocument(
    source_asset_id="SRC-GM-JGP-2021",
    doc_title="구미시 자연재해저감종합계획(2021.9)",
    doc_type=DOC_TYPE_JGP,
    publisher="구미시",
    admin_code="47190",
    admin_name="경상북도 구미시",
    files=(
        SourceFile(_jgp(*_GM_BASE, "01 본보고서", "GM-제1장 서론.pdf")),
        SourceFile(_jgp(*_GM_BASE, "01 본보고서", "GM-제2장 기초조사 및 기초분석을 통한 예비후보지 대상 검토.pdf")),
        SourceFile(_jgp(*_GM_BASE, "01 본보고서", "GM-제3장 자연재해 위험지구 선정 및 저감대책 수립.pdf")),
        SourceFile(_jgp(*_GM_BASE, "01 본보고서", "GM-제4장 자연재해 저감대책 시행계획 수립.pdf")),
        SourceFile(_jgp(*_GM_BASE, "01 본보고서", "GM-제5장 종합 및 활용방안.pdf")),
        SourceFile(_jgp(*_GM_BASE, "02 관리대장", "구미시_관리대장.pdf")),
        SourceFile(_jgp(*_GM_BASE, "03 별권부록", "C. 위험지구 후보지 위험요인 분석(01 하천재해).pdf")),
    ),
)

# -- 2. 의왕시 자연재해저감종합계획(2022.7) ---------------------------------
_UW_BASE = ("경기도 의왕시(2022.7.)", "경기도 의왕시(2022.7.)")

DOC_UW_JGP = SourceDocument(
    source_asset_id="SRC-UW-JGP-2022",
    doc_title="의왕시 자연재해저감종합계획(2022.7)",
    doc_type=DOC_TYPE_JGP,
    publisher="의왕시",
    admin_code="41430",
    admin_name="경기도 의왕시",
    files=(
        SourceFile(_jgp(*_UW_BASE, "보고서", "PDF", "제1장 서론(최종).pdf")),
        SourceFile(_jgp(*_UW_BASE, "보고서", "PDF", "제2장 기초조사 및 기초분석을 통한 예비후보지 대상 검토(최종).pdf")),
        SourceFile(_jgp(*_UW_BASE, "보고서", "PDF", "제3장 자연재해 위험지구 선정 및 저감대책 수립(최종).pdf")),
        SourceFile(_jgp(*_UW_BASE, "보고서", "PDF", "제4장 자연재해 저감대책 시행계획 수립(최종).pdf")),
        SourceFile(_jgp(*_UW_BASE, "보고서", "PDF", "제5장 종합 및 활용방안(최종).pdf")),
        SourceFile(_jgp(*_UW_BASE, "관리대장", "PDF", "03자연재해저감 종합계획(최종).pdf")),
        SourceFile(_jgp(*_UW_BASE, "관리대장", "PDF", "06관리대장(최종).pdf")),
        SourceFile(_jgp(*_UW_BASE, "부록", "PDF", "E.위험지구 후보지 위험요인 분석표(최종).pdf")),
    ),
)

# -- 3. 남원시 자연재해저감종합계획(2022.4) ---------------------------------
# 폴더명 "전라남도"는 원본 오기 — 경로는 실제 폴더명 그대로, 태깅은 전라북도(45190).
# 파일명 특이: 제2장은 확장자 앞 공백("...-수정 .pdf"), 제5장은 공백 2개("제5장  종합").
_NW_BASE = ("전라남도 남원시(2022.4.8.)", "전라남도 남원시(2022.4.8.)")

DOC_NW_JGP = SourceDocument(
    source_asset_id="SRC-NW-JGP-2022",
    doc_title="남원시 자연재해저감종합계획(2022.4)",
    doc_type=DOC_TYPE_JGP,
    publisher="남원시",
    admin_code="45190",
    admin_name="전라북도 남원시",
    notes='폴더명 "전라남도"는 오기 — 실제 전라북도(45190)로 태깅',
    files=(
        SourceFile(_jgp(*_NW_BASE, "보고서", "02.(작성서식 2) 제2차 남원시 자연재해저감 종합계획 수립 주요현황 1부-수정.pdf")),
        SourceFile(_jgp(*_NW_BASE, "보고서", "03.제1장 서론.pdf")),
        SourceFile(_jgp(*_NW_BASE, "보고서", "04.제2장 기초조사 및 기초분석을 통한 예비후보지 대상 검토-수정 .pdf")),
        SourceFile(_jgp(*_NW_BASE, "보고서", "05.제3장 자연재해 위험지구 선정 및 저감대책 수립.pdf")),
        SourceFile(_jgp(*_NW_BASE, "보고서", "06.제4장 자연재해 저감대책 시행계획 수립.pdf")),
        SourceFile(_jgp(*_NW_BASE, "보고서", "07.제5장  종합 및 활용방안.pdf")),
    ),
)

# -- 4. 요천 하천기본계획(변경, 2021, 국가) ---------------------------------
DOC_YC_RVP = SourceDocument(
    source_asset_id="SRC-YC-RVP-2021",
    doc_title="요천권역(국가하천) 하천기본계획(변경)(2021)",
    doc_type=DOC_TYPE_RVP,
    publisher="국토교통부",
    admin_code="45190",
    admin_name="전라북도 남원시",
    river_name="요천",
    river_grade="국가",
    files=(
        SourceFile(_rvp("2021_요천(남원)_보고서_국가_", "요천권역(국가하천) 하천기본계획(변경) 보고서.pdf")),
    ),
)

# -- 5. 구미천 하천기본계획(2025, 지방) -------------------------------------
_GMC_BASE = ("2025_구미천_보고서_지방",)

DOC_GMC_RVP = SourceDocument(
    source_asset_id="SRC-GMC-RVP-2025",
    doc_title="구미천 하천기본계획(2025)",
    doc_type=DOC_TYPE_RVP,
    publisher="경상북도",
    admin_code="47190",
    admin_name="경상북도 구미시",
    river_name="구미천",
    river_grade="지방",
    files=(
        SourceFile(_rvp(*_GMC_BASE, "보고서_제01장 개요.pdf")),
        SourceFile(_rvp(*_GMC_BASE, "보고서_제02장 유역 및 하천 현황.pdf")),
        SourceFile(_rvp(*_GMC_BASE, "보고서_제03장 종합분석.pdf")),
        SourceFile(_rvp(*_GMC_BASE, "보고서_제04장 하천 정비 및 관리 계획.pdf")),
        SourceFile(_rvp(*_GMC_BASE, "보고서_제05장 투자계획 및 기대효과.pdf")),
    ),
)

# -- 6. 안양천 하천기본계획(변경, 2020, 지방) --------------------------------
# plan_version: "2020"=금회(변경) / "2015"=기수립. `3.기타사항.pdf`는 스캔 이미지 — 제외.
_AYC_BASE = ("2020_안양천(의왕)_보고서_지방",)

DOC_AYC_RVP = SourceDocument(
    source_asset_id="SRC-AYC-RVP-2020",
    doc_title="안양천 하천기본계획(변경)(2020)",
    doc_type=DOC_TYPE_RVP,
    publisher="경기도",
    admin_code="41430",
    admin_name="경기도 의왕시",
    river_name="안양천",
    river_grade="지방",
    notes="3.기타사항.pdf는 스캔 이미지 — 레지스트리 제외",
    files=(
        SourceFile(_rvp(*_AYC_BASE, "1.안양천 하천기본계획 보고서 작성 (수정).pdf"), plan_version="2020"),
        SourceFile(_rvp(*_AYC_BASE, "2.기수립 하천기본계획.pdf"), plan_version="2015"),
    ),
)

#: 문서 6종 레지스트리(source_asset_id → SourceDocument)
DOCUMENTS: tuple[SourceDocument, ...] = (
    DOC_GM_JGP,
    DOC_UW_JGP,
    DOC_NW_JGP,
    DOC_YC_RVP,
    DOC_GMC_RVP,
    DOC_AYC_RVP,
)

DOCUMENTS_BY_ID: dict[str, SourceDocument] = {d.source_asset_id: d for d in DOCUMENTS}


# ---------------------------------------------------------------------------
# 검증 유틸
# ---------------------------------------------------------------------------

def iter_source_files():
    """(SourceDocument, SourceFile) 쌍을 순회한다."""
    for doc in DOCUMENTS:
        for f in doc.files:
            yield doc, f


def validate_registry() -> list[Path]:
    """레지스트리에 등록된 모든 경로의 존재를 확인하고 누락 경로 목록을 반환한다."""
    return [f.path for _, f in iter_source_files() if not f.path.is_file()]


def ensure_output_dirs() -> None:
    """산출 디렉터리(data/processed 등)를 생성한다. 원시자료 폴더에는 쓰지 않는다."""
    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    MANUAL_DIR.mkdir(parents=True, exist_ok=True)


if __name__ == "__main__":
    missing = validate_registry()
    total = sum(len(d.files) for d in DOCUMENTS)
    print(f"문서 {len(DOCUMENTS)}종 · 파일 {total}건 등록")
    if missing:
        print(f"누락 {len(missing)}건:")
        for p in missing:
            print(f"  - {p}")
        raise SystemExit(1)
    print("모든 등록 경로 존재 확인 완료")
