"""
Vercel Serverless 진입점.
모든 요청을 Django WSGI 앱으로 전달합니다.
"""
import os
import sys

# backend 루트를 path에 추가 (config, portfolio 모듈 로드용)
backend_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if backend_root not in sys.path:
    sys.path.insert(0, backend_root)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

from config.wsgi import app
