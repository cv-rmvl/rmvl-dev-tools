#!/bin/bash

# Compatibility entry for rdt versions that upgrade through setup/install.bash.
set -e

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
exec bash "$TOOLS_ROOT/setup/bash/install.bash" "$@"
