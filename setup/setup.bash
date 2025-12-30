#/bin/bash

TOOLS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

export PATH="$TOOLS_DIR/scripts:$PATH"
source "$TOOLS_DIR/scripts/completion.bash"