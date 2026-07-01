#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Installing dependencies..."
npm install
echo ""
echo "Starting Priceless Dreams site at http://localhost:8081"
echo "Press Ctrl+C to stop."
npm run web
