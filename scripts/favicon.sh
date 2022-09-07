#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
SIZES=(16 24 32 48 64 72 96 114 128 192 256 512)
SVG=$(readlink -f "$SCRIPT_DIR/../src/eContriiverLogo.svg")

OUTPUT_DIR="$SCRIPT_DIR/out"
if [ -d "$OUTPUT_DIR" ]; then
  echo "Remove output dir to continue: ${OUTPUT_DIR}"
  exit 1
fi
mkdir $OUTPUT_DIR

for SIZE in "${SIZES[@]}"; do
  inkscape  --export-filename="$OUTPUT_DIR/$SIZE.png" -w "$SIZE" -h "$SIZE" "$SVG"
done

convert -verbose "$OUTPUT_DIR/*.png" "$OUTPUT_DIR/favicon.ico"
