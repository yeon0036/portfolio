#!/usr/bin/env bash
# backend/scripts/seed_db.sh
# DB 마이그레이션만 수행합니다.
# 사용: backend 디렉터리에서 USE_SQLITE=1 ./scripts/seed_db.sh (로컬 SQLite)
#      또는 Docker: docker compose run --rm backend ./scripts/seed_db.sh

set -e
cd "$(dirname "$0")/.."
python manage.py migrate --noinput
echo "Done. Migrations applied."
