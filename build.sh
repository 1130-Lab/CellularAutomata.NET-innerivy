#!/usr/bin/env bash
# Builds the static web app into ./dist:
#   1. publishes the .NET WebAssembly host (AOT by default)
#   2. copies its _framework/ into web/public/
#   3. builds the React app with Vite and copies web/dist to ./dist
#
# Options (environment variables):
#   AOT=false   skip WebAssembly AOT compilation (much faster build, ~5-10x slower simulation)
set -euo pipefail
cd "$(dirname "$0")"

AOT="${AOT:-true}"

# AOT publishes strip IL from the intermediate assemblies (WasmStripILAfterAOT), so an
# interpreter build must not reuse them: start clean whenever the mode changes.
MODE_FILE=artifacts/webhost-aot-mode
if [ "$(cat "$MODE_FILE" 2>/dev/null || true)" != "$AOT" ]; then
  rm -rf CellularAutomata.NET.WebHost/obj/Release CellularAutomata.NET.WebHost/bin/Release artifacts/webhost
fi

echo "==> Publishing CellularAutomata.NET.WebHost (AOT=$AOT)"
dotnet publish CellularAutomata.NET.WebHost/CellularAutomata.NET.WebHost.csproj \
  -c Release -o artifacts/webhost -p:RunAOTCompilation="$AOT" -nologo

mkdir -p artifacts && echo "$AOT" > "$MODE_FILE"

echo "==> Copying _framework into web/public"
rm -rf web/public/_framework
mkdir -p web/public
cp -r artifacts/webhost/wwwroot/_framework web/public/_framework

echo "==> Building web app"
cd web
if [ ! -d node_modules ]; then
  npm ci --no-audit --no-fund
fi
npm run build
cd ..

rm -rf dist
cp -r web/dist dist
echo
echo "Done. Static site is in ./dist — serve it with any static file server, e.g.:"
echo "  npx serve dist"
echo "  python3 -m http.server -d dist 8080"
