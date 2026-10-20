#!/usr/bin/env bash
# Prefer optional repository-local SDKs; otherwise use the caller's PATH.
CA_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
if [[ -d "$CA_ROOT/.tools/dotnet" ]]; then
  export DOTNET_ROOT="$CA_ROOT/.tools/dotnet"
  export PATH="$DOTNET_ROOT:$PATH"
fi
if [[ -d "$CA_ROOT/.tools/node/bin" ]]; then
  export PATH="$CA_ROOT/.tools/node/bin:$PATH"
fi
