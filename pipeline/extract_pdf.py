"""T5 — PDF 추출기: 문서 6종(29개 PDF) 페이지 텍스트·표 추출 → 중간 JSON.

- 텍스트: PyMuPDF(fitz) — poppler 계열은 한글 유실로 사용 금지(CLAUDE.md)
- 표: pdfplumber — 표 없는 페이지는 빈 배열, 추출 실패는 경고 후 계속
- 자간 분리 정규화: "구 미 시" → "구미시" (한글 1글자씩 공백 분리 패턴 병합)
- 텍스트 없는 페이지(간지·이미지)는 제외하지 않고 skip 플래그로 마킹
- 다중 파일 문서는 페이지에 file/file_index 유지, 안양천은 plan_version 승계
- 산출: `data/processed/extracted/{source_asset_id}.json` (UTF-8, ensure_ascii=False)
- 원시자료 폴더에는 쓰지 않는다.

실행: `python pipeline/extract_pdf.py`
"""

from __future__ import annotations

import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

import fitz  # PyMuPDF
import pdfplumber

sys.path.insert(0, str(Path(__file__).resolve().parent))

from config import (  # noqa: E402
    DOCUMENTS,
    PROCESSED_DIR,
    RAW_ROOT,
    SourceDocument,
    ensure_output_dirs,
    validate_registry,
)

#: 페이지 추출 중간 JSON 산출 디렉터리
EXTRACTED_DIR = PROCESSED_DIR / "extracted"

# ---------------------------------------------------------------------------
# 자간 분리 정규화
# ---------------------------------------------------------------------------

#: 줄 전체가 한글 1글자씩 공백 분리된 제목 줄("서 론", "구 미 시" 등)
_LINE_SPACED = re.compile(r"^\s*[가-힣](?:\s+[가-힣])+\s*$")

#: 본문 중 한글 1글자가 3자 이상 연속으로 공백 분리된 구간("구 미 시 …")
#: 2글자 구간("할 수" 등)은 정상 띄어쓰기와 구분이 어려워 병합하지 않는다.
_RUN_SPACED = re.compile(r"(?<![가-힣])([가-힣](?: [가-힣]){2,})(?![가-힣])")


def normalize_spaced_hangul(text: str) -> str:
    """자간 분리("구 미 시")를 병합해 정상 표기("구미시")로 정규화한다."""
    out: list[str] = []
    for line in text.split("\n"):
        if _LINE_SPACED.match(line):
            out.append(re.sub(r"\s+", "", line))
        else:
            out.append(_RUN_SPACED.sub(lambda m: m.group(1).replace(" ", ""), line))
    return "\n".join(out)


def _clean_cell(cell: object) -> str:
    """표 셀 값 정규화 — None→"", 개행 유지, 자간 분리 병합."""
    if cell is None:
        return ""
    return normalize_spaced_hangul(str(cell)).strip()


# ---------------------------------------------------------------------------
# 파일 단위 추출
# ---------------------------------------------------------------------------

def extract_file(
    pdf_path: Path,
    file_index: int,
    plan_version: str | None,
    warnings: list[str],
) -> list[dict]:
    """PDF 1개의 페이지별 텍스트(fitz)·표(pdfplumber)를 추출한다."""
    rel = pdf_path.relative_to(RAW_ROOT).as_posix()
    pages: list[dict] = []

    doc = fitz.open(pdf_path)
    try:
        plumber = pdfplumber.open(pdf_path)
    except Exception as exc:  # 표 추출용 열기 실패 — 텍스트만 진행
        plumber = None
        warnings.append(f"[표] {rel}: pdfplumber 열기 실패 — {exc}")

    try:
        for i, page in enumerate(doc):
            physical_page = i + 1
            raw_text = page.get_text("text")
            text = normalize_spaced_hangul(raw_text).strip()

            tables: list[list[list[str]]] = []
            if plumber is not None and i < len(plumber.pages):
                ppage = plumber.pages[i]
                try:
                    for table in ppage.extract_tables() or []:
                        tables.append([[_clean_cell(c) for c in row] for row in table])
                except Exception as exc:
                    warnings.append(f"[표] {rel} p.{physical_page}: 추출 실패 — {exc}")
                finally:
                    try:
                        ppage.close()  # 페이지 캐시 해제(대용량 PDF 메모리 절약)
                    except Exception:
                        pass

            record: dict = {
                "file": rel,
                "file_index": file_index,
                "physical_page": physical_page,
                "plan_version": plan_version,
                "text": text,
                "tables": tables,
                "skip": False,
            }
            if not text:  # 간지·이미지 페이지 — 제외하지 않고 마킹
                record["skip"] = True
                record["skip_reason"] = "no_text"
            pages.append(record)
    finally:
        doc.close()
        if plumber is not None:
            plumber.close()

    return pages


# ---------------------------------------------------------------------------
# 문서 단위 추출
# ---------------------------------------------------------------------------

def extract_document(src: SourceDocument, warnings: list[str]) -> dict:
    """SourceDocument 1건의 모든 파일을 추출해 산출 JSON 구조를 만든다."""
    pages: list[dict] = []
    file_infos: list[dict] = []

    for file_index, f in enumerate(src.files):
        rel = f.path.relative_to(RAW_ROOT).as_posix()
        print(f"  - 파일 {file_index + 1}/{len(src.files)}: {f.path.name} ... ", end="", flush=True)
        file_pages = extract_file(f.path, file_index, f.plan_version, warnings)
        for p in file_pages:
            p["doc_seq"] = len(pages) + 1  # 문서 내 통산 순번(파일 경계와 별도)
            pages.append(p)
        file_infos.append(
            {
                "file": rel,
                "file_index": file_index,
                "num_pages": len(file_pages),
                "plan_version": f.plan_version,
            }
        )
        n_tables = sum(len(p["tables"]) for p in file_pages)
        print(f"{len(file_pages)}p, 표 {n_tables}개")

    return {
        "source_asset_id": src.source_asset_id,
        "doc_title": src.doc_title,
        "doc_type": src.doc_type,
        "publisher": src.publisher,
        "admin_code": src.admin_code,
        "admin_name": src.admin_name,
        "river_name": src.river_name,
        "river_grade": src.river_grade,
        "notes": src.notes,
        "extracted_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "extractor": {"text": "PyMuPDF", "tables": "pdfplumber"},
        "files": file_infos,
        "pages": pages,
    }


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")  # Windows 콘솔 한글 안전 출력
    except Exception:
        pass

    missing = validate_registry()
    if missing:
        print(f"레지스트리 누락 경로 {len(missing)}건 — 중단")
        for p in missing:
            print(f"  - {p}")
        return 1

    ensure_output_dirs()
    EXTRACTED_DIR.mkdir(parents=True, exist_ok=True)

    warnings: list[str] = []
    summary: list[tuple[str, int, int, int]] = []

    for src in DOCUMENTS:
        print(f"[{src.source_asset_id}] {src.doc_title} — 파일 {len(src.files)}건")
        result = extract_document(src, warnings)

        out_path = EXTRACTED_DIR / f"{src.source_asset_id}.json"
        with out_path.open("w", encoding="utf-8") as fp:
            json.dump(result, fp, ensure_ascii=False, indent=1)

        n_pages = len(result["pages"])
        n_tables = sum(len(p["tables"]) for p in result["pages"])
        n_skip = sum(1 for p in result["pages"] if p["skip"])
        summary.append((src.source_asset_id, n_pages, n_tables, n_skip))
        print(f"  => {out_path.relative_to(PROCESSED_DIR.parent.parent).as_posix()} "
              f"(페이지 {n_pages} · 표 {n_tables} · skip {n_skip})")

    print("\n=== 추출 요약 ===")
    total_pages = total_tables = total_skip = 0
    for asset_id, n_pages, n_tables, n_skip in summary:
        print(f"{asset_id}: 페이지 {n_pages} · 표 {n_tables} · skip {n_skip}")
        total_pages += n_pages
        total_tables += n_tables
        total_skip += n_skip
    print(f"합계: 문서 {len(summary)}종 · 페이지 {total_pages} · 표 {total_tables} · skip {total_skip}")

    if warnings:
        print(f"\n경고 {len(warnings)}건:")
        for w in warnings:
            print(f"  - {w}")
    else:
        print("\n경고 없음")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
