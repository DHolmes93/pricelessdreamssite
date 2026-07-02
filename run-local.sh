#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "→ Installing dependencies..."
npm install

echo ""
echo "→ Starting local web server..."
echo "   Open http://localhost:8081 in your browser"
echo "   Press Ctrl+C to stop"
echo ""

npm run web
