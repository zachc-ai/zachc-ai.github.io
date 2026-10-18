#!/usr/bin/env bash
# Re-render the site's raster images from the HTML sources in this folder,
# using the local Chrome in headless mode (no other tools needed):
#   assets/social-card.png   1200×630 default og:image
#   apple-touch-icon.png     180×180 iOS home-screen icon (site root)
#   favicon.ico              32×32 fallback favicon (site root)
set -euo pipefail
cd "$(dirname "$0")/../.."
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

shot() { # url width height out [transparent]
  local bg=()
  [ "${5:-}" = transparent ] && bg=(--default-background-color=00000000)
  "$chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --user-data-dir="$tmp/profile-$RANDOM" "${bg[@]}" --window-size="$2,$3" \
    --screenshot="$4" "$1" >/dev/null 2>&1
}

src="file://$PWD/docs/brand"
shot "$src/social-card.html" 1200 630 assets/social-card.png
shot "$src/icon.html#touch" 512 512 "$tmp/touch.png"
shot "$src/icon.html" 512 512 "$tmp/icon.png" transparent

sips -z 180 180 "$tmp/touch.png" --out apple-touch-icon.png >/dev/null
sips -z 32 32 "$tmp/icon.png" --out "$tmp/icon-32.png" >/dev/null
sips -s format ico "$tmp/icon-32.png" --out favicon.ico >/dev/null
ls -l assets/social-card.png apple-touch-icon.png favicon.ico
