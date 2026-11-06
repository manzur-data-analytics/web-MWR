"""Generate carousel WebP images from an external originals directory.

Run: python frontend/scripts/optimize-event-images.py PATH_TO_ORIGINALS
The source directory must contain bodas/, eventos-sociales/, eventos-corporativos/.
Requires Pillow: python -m pip install Pillow
"""

import argparse
from pathlib import Path
from PIL import Image, ImageOps


root = Path(__file__).resolve().parents[1] / "public/secciones/eventos/offers"
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("source", type=Path, help="Originals directory, organized by category")
args = parser.parse_args()
source_root = args.source.resolve()
if not source_root.is_dir():
    parser.error("The originals directory does not exist")
categories = {"bodas", "eventos-sociales", "eventos-corporativos"}
sources = sorted(p for p in source_root.glob("*/*")
                 if p.parent.name in categories and p.suffix.lower() in {".jpg", ".jpeg"})
if not sources:
    parser.error("No JPG photographs found in the category directories")
original_bytes = 0
optimized_bytes = 0

for source in sources:
    destination = root / source.parent.name / f"{source.stem}.webp"
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        # Preserve the full photo; CSS controls the crop in the carousel.
        image.thumbnail((1200, 1600), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=82, method=6)
    original_bytes += source.stat().st_size
    optimized_bytes += destination.stat().st_size

print(f"Generated {len(sources)} WebP images")
print(f"Original: {original_bytes:,} bytes")
print(f"Optimized: {optimized_bytes:,} bytes")
if original_bytes:
    print(f"Reduction: {100 * (1 - optimized_bytes / original_bytes):.1f}%")
