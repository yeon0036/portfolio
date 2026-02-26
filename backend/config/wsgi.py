"""
WSGI config for portfolio backend.
"""
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_wsgi_application()
# Vercel Serverless는 'app' 이름의 WSGI 앱을 사용합니다.
app = application
