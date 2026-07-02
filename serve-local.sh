#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

if [ ! -d dist ]; then
  echo "→ Building static site..."
  npm install
  npx expo export --platform web
fi

echo ""
echo "→ Serving static site at http://localhost:3000"
echo "   Press Ctrl+C to stop"
echo ""

npx --yes serve dist -l 3000
