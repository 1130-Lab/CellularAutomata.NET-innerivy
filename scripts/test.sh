#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/env.sh"
cd "$CA_ROOT"
./scripts/build.sh
dotnet build CellularAutomata.NET.slnx -c Release
dotnet run --project Visualizer.Tests -c Release --no-build
cd visualizer
npx playwright install chromium
npm test
