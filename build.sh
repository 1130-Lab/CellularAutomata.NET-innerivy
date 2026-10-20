#!/usr/bin/env bash
# Builds the web visualizer: publishes the .NET WebAssembly host and bundles the React app.
# Output: web/dist (a static folder; serve it with any static file server).
set -euo pipefail
cd "$(dirname "$0")/web"
if [ ! -d node_modules ]; then
  npm ci
fi
npm run build
echo
echo "Built web/dist. Serve it with e.g.: python3 -m http.server -d web/dist 8080"
