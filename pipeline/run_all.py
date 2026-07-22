"""T10 — 파이프라인 오케스트레이터: extract → chunk → tag_meta → build_structured.

전체 파이프라인 단일 진입점(Phase 1 완결). 각 단계 모듈을 같은 프로세스에서
함수 호출(lazy import)로 실행하고, 완료 후 최종 검증·추출 리포트를 생성한다.

- extract 단계는 산출물(`data/processed/extracted/*.json` 6종)이 모두 있으면
  자동 재사용(skip). `--force`로 전체 재실행, `--skip-extract`로 명시적 skip.
- 재실행 멱등: 모든 산출물은 덮어쓰기(이어붙임 금지).
- 추출 리포트: `data/processed/report.md`(gitignore 대상) + stdout 요약.
- fetch_geo.py(VWorld 지오 시드)는 선택 단계 — 필수 순서에 포함하지 않고
  키(VWORLD_API_KEY) 유무 안내만 출력한다.

실행: `python pipeline/run_all.py [--force | --skip-extract]`
"""

from __future__ import annotations

import argparse
import json
import os
import random
import sys
import time
from collections import Counter
from datetime import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

# Windows 콘솔(cp949)에서 한국어 출력 보장 — 이모지 사용 금지
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

from config import (  # noqa: E402
    CHUNKS_PATH,
    DOCUMENTS,
    DOCUMENTS_BY_ID,
    PROCESSED_DIR,
    ensure_output_dirs,
    validate_registry,
)

EXTRACTED_DIR = PROCESSED_DIR / "extracted"
REPORT_PATH = PROCESSED_DIR / "report.md"

SAMPLE_SEED = 42     # 샘플 검수 목록 재현용 고정 시드
SAMPLE_SIZE = 20     # 육안 검수 샘플 청크 수
SNIPPET_LEN = 100    # 샘플 본문 앞부분 길이


# ---------------------------------------------------------------------------
# 단계 실행
# ---------------------------------------------------------------------------

def _banner(title: str) -> None:
    print("\n" + "=" * 64)
    print(title)
    print("=" * 64)


def run_step(name: str, runner) -> float:
    """단계 1개를 실행하고 소요 시간(초)을 반환한다. 실패 시 SystemExit."""
    _banner(f"[단계] {name}")
    t0 = time.monotonic()
    try:
        rc = runner()
    except SystemExit as exc:  # 모듈 내부 raise SystemExit(...) 처리
        rc = exc.code if isinstance(exc.code, int) else (0 if exc.code is None else 1)
    except AssertionError as exc:
        print(f"[오류] {name} 검증 실패: {exc}")
        raise SystemExit(1)
    if rc not in (None, 0):
        print(f"[오류] {name} 단계 실패(exit={rc}) — 중단")
        raise SystemExit(1)
    elapsed = time.monotonic() - t0
    print(f"[완료] {name} ({elapsed:.1f}초)")
    return elapsed


def extracted_outputs_present() -> tuple[bool, list[str]]:
    """추출 산출 JSON 6종의 존재 여부와 누락 목록을 반환한다."""
    missing = [
        d.source_asset_id
        for d in DOCUMENTS
        if not (EXTRACTED_DIR / f"{d.source_asset_id}.json").is_file()
    ]
    return (not missing, missing)


# ---------------------------------------------------------------------------
# 최종 검증·리포트
# ---------------------------------------------------------------------------

def load_chunks() -> list[dict]:
    if not CHUNKS_PATH.is_file():
        print(f"[오류] 최종 코퍼스 없음: {CHUNKS_PATH}")
        raise SystemExit(1)
    chunks: list[dict] = []
    with CHUNKS_PATH.open(encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:
                chunks.append(json.loads(line))
    return chunks


def load_extract_stats() -> dict[str, dict]:
    """추출 JSON 6종에서 문서별 페이지·표·skip 통계를 집계한다."""
    stats: dict[str, dict] = {}
    for d in DOCUMENTS:
        path = EXTRACTED_DIR / f"{d.source_asset_id}.json"
        data = json.loads(path.read_text(encoding="utf-8"))
        pages = data["pages"]
        stats[d.source_asset_id] = {
            "pages": len(pages),
            "tables": sum(len(p.get("tables") or []) for p in pages),
            "skip": sum(1 for p in pages if p.get("skip")),
            "files": len(data.get("files", [])),
        }
    return stats


def verify_corpus(chunks: list[dict]) -> dict:
    """완료 기준 검증 — 실패 시 SystemExit(1). 검증 결과 dict 반환."""
    problems: list[str] = []

    by_src = Counter(c["source_asset_id"] for c in chunks)
    missing_src = [sid for sid in DOCUMENTS_BY_ID if sid not in by_src]
    if missing_src:
        problems.append(f"chunks.jsonl에 source_asset_id 누락: {missing_src}")

    pids = [c["passage_id"] for c in chunks]
    dup = len(pids) - len(set(pids))
    if dup:
        problems.append(f"passage_id 중복 {dup}건")

    nw = [c for c in chunks if c["source_asset_id"] == "SRC-NW-JGP-2022"]
    nw_bad = sum(1 for c in nw if c.get("admin_code") != "45190")
    if not nw or nw_bad:
        problems.append(f"남원 admin_code=45190 위반 {nw_bad}건 (총 {len(nw)}건)")

    ayc = [c for c in chunks if c["source_asset_id"] == "SRC-AYC-RVP-2020"]
    ayc_bad = sum(1 for c in ayc if c.get("plan_version") not in ("2015", "2020"))
    if not ayc or ayc_bad:
        problems.append(f"안양천 plan_version 누락/무효 {ayc_bad}건 (총 {len(ayc)}건)")

    if problems:
        print("[오류] 최종 검증 실패:")
        for p in problems:
            print(f"  - {p}")
        raise SystemExit(1)

    pv = Counter(c["plan_version"] for c in ayc)
    return {
        "by_src": by_src,
        "unique_pids": len(set(pids)),
        "total_pids": len(pids),
        "nw_count": len(nw),
        "ayc_count": len(ayc),
        "ayc_pv": dict(sorted(pv.items())),
    }


def sample_chunks(chunks: list[dict]) -> list[dict]:
    """무작위 샘플 20청크 — random.seed(42) 고정으로 재현 가능."""
    rng = random.Random(SAMPLE_SEED)
    n = min(SAMPLE_SIZE, len(chunks))
    return rng.sample(chunks, n)


def _snippet(text: str) -> str:
    one_line = " ".join((text or "").split())
    return one_line[:SNIPPET_LEN]


def build_report(
    chunks: list[dict],
    extract_stats: dict[str, dict],
    verify: dict,
    skipped_steps: list[str],
    timings: dict[str, float],
) -> str:
    """추출 리포트 마크다운(report.md) 본문을 생성한다."""
    by_src: Counter = verify["by_src"]
    hazard_hit = {
        sid: sum(1 for c in chunks
                 if c["source_asset_id"] == sid and c.get("hazard_codes"))
        for sid in DOCUMENTS_BY_ID
    }
    total = len(chunks)
    total_hit = sum(hazard_hit.values())

    lines: list[str] = []
    lines.append("# 추출 리포트 — 재난안전 AI 시범 서비스 파이프라인 (Phase 1)")
    lines.append("")
    lines.append(f"- 생성 시각: {datetime.now().isoformat(timespec='seconds')}")
    lines.append(f"- 진입점: `python pipeline/run_all.py` "
                 f"(extract → chunk → tag_meta → build_structured)")
    if skipped_steps:
        lines.append(f"- skip 단계: {', '.join(skipped_steps)} — 기존 산출물 재사용")
    else:
        lines.append("- skip 단계: 없음(전 단계 실행)")
    if timings:
        t = " · ".join(f"{k} {v:.1f}s" for k, v in timings.items())
        lines.append(f"- 단계별 소요: {t}")
    lines.append("")

    # -- 1. 문서별 처리 현황 -------------------------------------------
    lines.append("## 1. 문서별 처리 페이지·청크·표")
    lines.append("")
    lines.append("| source_asset_id | 문서 | 페이지 | skip | 표 | 청크 | hazard 태깅 | 커버리지 |")
    lines.append("|---|---|---:|---:|---:|---:|---:|---:|")
    tot_pages = tot_skip = tot_tables = 0
    for d in DOCUMENTS:
        sid = d.source_asset_id
        st = extract_stats[sid]
        n_chunks = by_src[sid]
        hit = hazard_hit[sid]
        cov = hit / n_chunks * 100 if n_chunks else 0.0
        lines.append(
            f"| {sid} | {d.doc_title} | {st['pages']:,} | {st['skip']} | "
            f"{st['tables']:,} | {n_chunks:,} | {hit:,} | {cov:.1f}% |"
        )
        tot_pages += st["pages"]
        tot_skip += st["skip"]
        tot_tables += st["tables"]
    lines.append(
        f"| 합계 | 문서 {len(DOCUMENTS)}종 | {tot_pages:,} | {tot_skip} | "
        f"{tot_tables:,} | {total:,} | {total_hit:,} | {total_hit / total * 100:.1f}% |"
    )
    lines.append("")

    # -- 2. plan_version 분포 ------------------------------------------
    lines.append("## 2. 안양천 plan_version 분포 (기수립 2015 / 금회 2020)")
    lines.append("")
    for pv, cnt in verify["ayc_pv"].items():
        label = "기수립" if pv == "2015" else "금회(변경)"
        lines.append(f"- plan_version={pv} ({label}): {cnt:,}청크")
    lines.append(f"- 합계: {verify['ayc_count']:,}청크 (전건 plan_version 보유)")
    lines.append("")

    # -- 3. 검증 결과 --------------------------------------------------
    lines.append("## 3. 검증 결과")
    lines.append("")
    lines.append(f"- source_asset_id 6종 존재: 통과 ({', '.join(sorted(by_src))})")
    lines.append(f"- 남원(SRC-NW-JGP-2022) admin_code=45190: 통과 — "
                 f"{verify['nw_count']:,}청크 전건 45190(전라북도)")
    lines.append(f"- 안양천 plan_version 존재: 통과 — {verify['ayc_count']:,}청크 전건 "
                 f"2015/2020 중 하나")
    lines.append(f"- passage_id 전역 유일성: 통과 — "
                 f"{verify['unique_pids']:,}/{verify['total_pids']:,} 유일")
    lines.append("")

    # -- 4. 샘플 육안 검수 목록 ----------------------------------------
    lines.append(f"## 4. 샘플 {SAMPLE_SIZE}청크 육안 검수 목록 "
                 f"(random.seed({SAMPLE_SEED}) 고정 — 재현 가능)")
    lines.append("")
    lines.append("| # | passage_id | 문서 | 장-쪽 | 본문 앞 100자 |")
    lines.append("|---:|---|---|---|---|")
    for i, c in enumerate(sample_chunks(chunks), start=1):
        label = c.get("page_label_start") or str(c.get("page_start"))
        label_end = c.get("page_label_end")
        if label_end and label_end != label:
            label = f"{label}~{label_end}"
        doc_short = DOCUMENTS_BY_ID[c["source_asset_id"]].doc_title
        snip = _snippet(c.get("content", "")).replace("|", "\\|")
        lines.append(f"| {i} | {c['passage_id']} | {doc_short} | {label} | {snip} |")
    lines.append("")
    return "\n".join(lines) + "\n"


def print_stdout_summary(
    chunks: list[dict],
    extract_stats: dict[str, dict],
    verify: dict,
    skipped_steps: list[str],
) -> None:
    """리포트는 gitignore 대상 — 핵심 수치를 stdout으로 요약 출력한다."""
    by_src: Counter = verify["by_src"]
    total = len(chunks)
    _banner("파이프라인 최종 요약 (report.md 동일 내용 축약)")

    print("[문서별 페이지·표·청크·hazard 커버리지]")
    tot_pages = tot_tables = tot_hit = 0
    for d in DOCUMENTS:
        sid = d.source_asset_id
        st = extract_stats[sid]
        n_chunks = by_src[sid]
        hit = sum(1 for c in chunks
                  if c["source_asset_id"] == sid and c.get("hazard_codes"))
        cov = hit / n_chunks * 100 if n_chunks else 0.0
        print(f"  {sid:<18} 페이지 {st['pages']:>5,} (skip {st['skip']:>2}) · "
              f"표 {st['tables']:>6,} · 청크 {n_chunks:>5,} · "
              f"hazard {hit:>5,} ({cov:5.1f}%)")
        tot_pages += st["pages"]
        tot_tables += st["tables"]
        tot_hit += hit
    print(f"  {'합계':<18} 페이지 {tot_pages:>5,} · 표 {tot_tables:>6,} · "
          f"청크 {total:>5,} · hazard {tot_hit:>5,} ({tot_hit / total * 100:5.1f}%)")

    print("\n[검증]")
    print(f"  - source_asset_id 6종 존재: 통과")
    print(f"  - 남원 45190 청크: {verify['nw_count']:,}건 전건 통과")
    print(f"  - 안양천 plan_version 분포: {verify['ayc_pv']} "
          f"(총 {verify['ayc_count']:,}건)")
    print(f"  - passage_id 유일성: {verify['unique_pids']:,}/{verify['total_pids']:,} 통과")

    if skipped_steps:
        print(f"\n[skip 단계] {', '.join(skipped_steps)} — 기존 산출물 재사용")
    else:
        print("\n[skip 단계] 없음(전 단계 실행)")
    print(f"\n샘플 {SAMPLE_SIZE}청크 육안 검수 목록: {REPORT_PATH} 4장 참조 "
          f"(random.seed({SAMPLE_SEED}) 고정)")
    print(f"리포트: {REPORT_PATH}")
    print(f"코퍼스: {CHUNKS_PATH} (청크 {total:,}건)")


# ---------------------------------------------------------------------------
# 메인
# ---------------------------------------------------------------------------

def main() -> int:
    parser = argparse.ArgumentParser(
        description="재난안전 AI 파이프라인 전체 실행 (extract→chunk→tag_meta→build_structured)")
    group = parser.add_mutually_exclusive_group()
    group.add_argument("--force", action="store_true",
                       help="추출 산출물이 있어도 extract부터 전체 재실행")
    group.add_argument("--skip-extract", action="store_true",
                       help="extract 단계를 강제 skip(산출물 6종 필수)")
    args = parser.parse_args()

    ensure_output_dirs()

    # 레지스트리 경로 사전 검증(추출을 skip해도 원본 존재는 확인)
    missing_paths = validate_registry()
    if missing_paths:
        print(f"[오류] 원시자료 레지스트리 누락 {len(missing_paths)}건 — 중단")
        for p in missing_paths:
            print(f"  - {p}")
        return 1

    skipped_steps: list[str] = []
    timings: dict[str, float] = {}

    # -- 1. extract ----------------------------------------------------
    present, missing = extracted_outputs_present()
    if args.skip_extract:
        if not present:
            print(f"[오류] --skip-extract 지정했으나 추출 산출물 누락: {missing}")
            return 1
        print(f"[skip] extract — --skip-extract 지정, 기존 산출물 6종 재사용")
        skipped_steps.append("extract")
    elif present and not args.force:
        print(f"[skip] extract — 산출물 6종 존재({EXTRACTED_DIR}), 재사용 "
              f"(전체 재실행은 --force)")
        skipped_steps.append("extract")
    else:
        def _run_extract() -> int:
            import extract_pdf
            return extract_pdf.main()
        timings["extract"] = run_step("extract (PDF 추출 — PyMuPDF·pdfplumber)", _run_extract)

    # -- 2. chunk ------------------------------------------------------
    def _run_chunk() -> int:
        import chunk
        return chunk.main()
    timings["chunk"] = run_step("chunk (장·절·지구 청킹 → chunks_raw.jsonl)", _run_chunk)

    # -- 3. tag_meta ---------------------------------------------------
    def _run_tag() -> None:
        import tag_meta
        return tag_meta.main()
    timings["tag_meta"] = run_step("tag_meta (재난메타 태깅 → chunks.jsonl)", _run_tag)

    # -- 4. build_structured -------------------------------------------
    def _run_structured() -> int:
        import build_structured
        return build_structured.main()
    timings["build_structured"] = run_step(
        "build_structured (정형데이터 4종 검증·반영)", _run_structured)

    # -- (선택) fetch_geo 안내 -----------------------------------------
    if os.environ.get("VWORLD_API_KEY"):
        print("\n[안내] VWORLD_API_KEY 설정됨 — 실경계·지오코딩 보강은 "
              "`python pipeline/fetch_geo.py` 별도 실행(선택 단계)")
    else:
        print("\n[안내] VWORLD_API_KEY 미설정 — fetch_geo.py(선택 단계)는 생략. "
              "geo.json은 시드·캐시 기반으로 이미 검증됨")

    # -- 최종 검증·리포트 ----------------------------------------------
    _banner("[단계] 최종 검증·추출 리포트 생성")
    chunks = load_chunks()
    extract_stats = load_extract_stats()
    verify = verify_corpus(chunks)

    report_md = build_report(chunks, extract_stats, verify, skipped_steps, timings)
    with REPORT_PATH.open("w", encoding="utf-8", newline="\n") as f:
        f.write(report_md)

    print_stdout_summary(chunks, extract_stats, verify, skipped_steps)
    print("\n파이프라인 전체 완료")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
