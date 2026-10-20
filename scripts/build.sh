#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/env.sh"
cd "$CA_ROOT"
rm -rf artifacts/wasm visualizer/public/wasm
dotnet publish Visualizer.Wasm -c Release -o artifacts/wasm
mkdir -p visualizer/public/wasm
cp -a artifacts/wasm/wwwroot/. visualizer/public/wasm/
npm --prefix visualizer ci
npm --prefix visualizer run build
printf '\nStatic site: visualizer/dist\nServe: python3 -m http.server 8080 --directory visualizer/dist\n'
