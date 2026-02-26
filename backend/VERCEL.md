# Vercel에 백엔드 배포하기

[Django Hello World 템플릿](https://vercel.com/templates/python/django-hello-world) 방식을 참고해, 이 프로젝트를 Vercel Serverless Functions로 배포할 수 있도록 설정되어 있습니다.

## 배포 절차

1. **Vercel 대시보드**에서 새 프로젝트 생성 → **Import** 시 **Root Directory**를 `backend`로 지정합니다.
2. **Framework Preset**: Other (또는 Python 없음)
3. **Build Command**: 비워 두거나 `pip install -r requirements.txt` (필요 시)
4. **Output Directory**: 비워 둠
5. **Install Command**: `pip install -r requirements.txt` (Vercel이 requirements.txt를 보면 자동으로 설치할 수 있음. 없으면 명시)

## 환경 변수 (필수)

Vercel은 DB를 제공하지 않으므로 **외부 DB**를 쓰거나 **Vercel Postgres**를 연결해야 합니다.

### 옵션 A: Vercel Postgres / Neon / Supabase 등

- 해당 서비스에서 connection string 또는 호스트 정보를 받아 옵니다.
- Vercel 프로젝트 **Settings → Environment Variables**에 다음을 추가합니다.

| 변수명 | 설명 |
|--------|------|
| `DJANGO_SECRET_KEY` | 프로덕션용 시크릿 (랜덤 문자열) |
| `DEBUG` | `False` |
| `ALLOWED_HOSTS` | `xxx.vercel.app,.vercel.app` (배포 후 나온 도메인으로 수정) |
| `POSTGRES_HOST` | DB 호스트 |
| `POSTGRES_PORT` | `5432` |
| `POSTGRES_DB` | DB 이름 |
| `POSTGRES_USER` | DB 유저 |
| `POSTGRES_PASSWORD` | DB 비밀번호 |
| `CORS_ORIGINS` | 프론트 주소 (예: `https://your-frontend.vercel.app`) |

### 옵션 B: SQLite (비권장)

서버리스에서는 요청마다 새 인스턴스가 뜨고 파일 시스템이 유지되지 않아, SQLite로는 데이터가 남지 않습니다. 테스트용으로만 잠시 쓸 수 있습니다.

- `USE_SQLITE=1` 로 두고 배포하면 DB 파일은 `/tmp` 등에 생성되지만, **재배포·재시작 시 데이터가 사라집니다.** 실제 서비스에는 외부 DB를 쓰세요.

## 로컬·배포 같은 DB(Supabase) 쓰기

로컬과 Vercel이 **같은 Supabase Postgres**를 쓰려면 `.env.dev`에서 `USE_SQLITE=0` (또는 비움)으로 두고, `POSTGRES_*`를 Supabase 값으로 맞춥니다. Vercel 환경 변수에도 같은 `POSTGRES_*`를 넣으면 됩니다.

### 로컬에서 "failed to resolve host" 나올 때

맥에서 `db.xxx.supabase.co`를 못 찾으면 DNS 문제일 수 있습니다. 아래 순서로 확인해 보세요.

1. **DNS 서버를 Google DNS로 변경**  
   시스템 설정 → 네트워크 → Wi‑Fi → 상세 정보 → DNS → `8.8.8.8`, `8.8.4.4` 추가 후 적용.

2. **DNS 캐시 비우기** (터미널)  
   ```bash
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   ```

3. **다른 네트워크에서 시도**  
   휴대폰 핫스팟 등으로 바꿔서 `ping db.fmcfwjrqbvoaqrecpnfc.supabase.co` 가 되는지 확인.

---

DB를 새로 썼다면, **로컬에서 migrate**를 한 뒤 그 DB를 Vercel 환경 변수로 가리키는 방식이 단순합니다.  
Vercel 빌드 시 마이그레이션을 실행하려면 **Build Command**에 다음을 포함할 수 있습니다 (외부 DB 사용 시).

```bash
pip install -r requirements.txt && python manage.py migrate --noinput
```

## 프론트엔드에서 연결

프론트(Vercel 등)에서 이 백엔드를 쓰려면:

- `NEXT_PUBLIC_API_URL` 에 배포된 백엔드 URL을 넣습니다.  
  예: `https://backend-xxx.vercel.app`

## 참고

- [Django Hello World - Vercel](https://vercel.com/templates/python/django-hello-world)
- [Vercel Python Runtime](https://vercel.com/docs/functions/runtimes/python)
