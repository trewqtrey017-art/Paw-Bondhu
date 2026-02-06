#!/usr/bin/env bash
set -euo pipefail

# Paw Bondhu local server
# Default: dev mode with auto-reload
# Usage:
#   ./serve.sh
#   ./serve.sh --dev
#   ./serve.sh --static

PORT="${PORT:-5173}"
UI_PORT="${UI_PORT:-5174}"
HOST="${HOST:-127.0.0.1}"
MODE="${1:---dev}"

echo "---------------------------------------"
echo "Starting Paw Bondhu local server"
echo "Host: http://${HOST}:${PORT}"
echo "Mode: ${MODE}"
echo "---------------------------------------"

run_static_server() {
  if command -v python3 >/dev/null 2>&1; then
    echo "Using Python 3 static server"
    exec python3 -m http.server "${PORT}" --bind "${HOST}"
  elif command -v npx >/dev/null 2>&1; then
    echo "Using npx serve static server"
    exec npx -y serve -l "${PORT}" .
  elif command -v python >/dev/null 2>&1; then
    echo "Using Python 2 static server"
    exec python -m SimpleHTTPServer "${PORT}"
  else
    echo "Error: no suitable server found (python3, npx, or python required)." >&2
    exit 1
  fi
}

if [[ "${MODE}" == "--dev" || "${MODE}" == "dev" ]]; then
  if command -v npx >/dev/null 2>&1; then
    echo "Using BrowserSync with live reload"
    echo "Watching: index.html, app.js, styles.css, firebase-config.js, image-upload-config.js, firestore.rules, firestore.indexes.json, README.md, PROGRESS.md"
    exec npx -y browser-sync@3.0.3 start \
      --server . \
      --host "${HOST}" \
      --port "${PORT}" \
      --ui-port "${UI_PORT}" \
      --files "index.html,app.js,styles.css,firebase-config.js,image-upload-config.js,firestore.rules,firestore.indexes.json,README.md,PROGRESS.md" \
      --no-open \
      --no-notify
  else
    echo "Warning: npx not found; falling back to static mode (no auto-reload)."
    run_static_server
  fi
elif [[ "${MODE}" == "--static" || "${MODE}" == "static" ]]; then
  run_static_server
else
  echo "Unknown mode: ${MODE}" >&2
  echo "Use --dev or --static" >&2
  exit 1
fi
