#!/bin/bash
# build_epub.sh — Build biological_modeling.epub from LaTeX source using make4ht
# Usage: bash build_epub.sh [--clean]
#
# Requires: MacTeX with make4ht, bibtex, makeglossaries
# Output:   assets/ebook/biological_modeling.epub

set -euo pipefail

TEXBIN=/Library/TeX/texbin
TEXDIR="$(cd "$(dirname "$0")" && pwd)"   # directory containing this script
OUTDIR="$TEXDIR/../ebook"
MAINFILE=biological_modeling_epub
CFGFILE=biological_modeling_epub.cfg

cd "$TEXDIR"

# ── Optional clean ────────────────────────────────────────────────────────
if [[ "${1:-}" == "--clean" ]]; then
  echo "Cleaning build artifacts..."
  rm -f "$MAINFILE".{aux,bbl,bcf,blg,epub,glo,glsdefs,html,idx,ilg,ind,ist,lg,log,ncx,opf,out,run.xml,tmp,toc,xref} 2>/dev/null || true
  rm -rf "${MAINFILE}_files" "${MAINFILE}-epub" 2>/dev/null || true
  echo "Clean done."
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Building EPUB from LaTeX source..."
echo "Working directory: $TEXDIR"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ── Pass 1: initial make4ht run (generates .aux, .bcf, .glo) ─────────────
echo ""
echo "[1/4] First make4ht pass (generates aux files)..."
"$TEXBIN/make4ht" \
  --format epub3 \
  --config "$CFGFILE" \
  --mode draft \
  "$MAINFILE.tex" \
  "mathml,charset=utf-8" \
  2>&1 | tail -20 || true   # allow failure on first pass (refs unresolved)

# ── Run bibtex (bibliography) ─────────────────────────────────────────────
echo ""
echo "[2/4] Running bibtex..."
"$TEXBIN/bibtex" "$MAINFILE" 2>&1 || {
  echo "  (bibtex had warnings — continuing)"
}

# ── Run makeglossaries (glossary) ─────────────────────────────────────────
echo ""
echo "[3/4] Running makeglossaries..."
"$TEXBIN/makeglossaries" "$MAINFILE" 2>&1 || {
  echo "  (makeglossaries had warnings — continuing)"
}

# ── Pass 2: final make4ht run (resolves all references) ───────────────────
echo ""
echo "[4/4] Final make4ht pass (builds EPUB)..."
"$TEXBIN/make4ht" \
  --format epub3 \
  --config "$CFGFILE" \
  "$MAINFILE.tex" \
  "mathml,charset=utf-8"

# ── Copy output ───────────────────────────────────────────────────────────
if [[ -f "$MAINFILE.epub" ]]; then
  mkdir -p "$OUTDIR"
  cp "$MAINFILE.epub" "$OUTDIR/biological_modeling.epub"
  EPUB_SIZE=$(du -h "$OUTDIR/biological_modeling.epub" | cut -f1)
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "Done!  EPUB written to:"
  echo "  $OUTDIR/biological_modeling.epub  ($EPUB_SIZE)"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
  echo ""
  echo "ERROR: $MAINFILE.epub was not produced."
  echo "Check the log: $TEXDIR/$MAINFILE.log"
  exit 1
fi
