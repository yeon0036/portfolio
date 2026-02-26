# Docker로 실행하기

## 1. 백엔드만 Docker로 띄우기

```bash
cd backend
docker compose up --build --remove-orphans
```

- `--remove-orphans`: 예전에 쓰던 서비스(backend-web 등) 컨테이너가 있으면 함께 정리
- **PostgreSQL**: `localhost:5432` (DB: `portfolio_db`, 유저: `portfolio`, 비밀번호: `portfolio`)
- **Django API**: http://localhost:8000/api/portfolio/
- 기동 시 자동으로 `migrate` 후 Gunicorn 실행  
  → **런타임에는 DB만 사용**합니다.

### 백그라운드 실행

```bash
docker compose up -d --build
```

### 로그 보기 / 중지

```bash
docker compose logs -f    # 로그
docker compose down       # 중지 및 컨테이너 제거
docker compose down -v    # 볼륨까지 삭제 (DB 데이터 초기화)
```

---

## 2. 프론트엔드 + 백엔드 함께 쓰기

1. **백엔드**를 Docker로 띄운다.

   ```bash
   cd backend && docker compose up -d --build --remove-orphans
   ```

2. **백엔드 연결 확인** (터미널에서):

   ```bash
   curl -s http://localhost:8000/api/portfolio/ | head -c 200
   ```

   JSON 배열이 조금이라도 보이면 백엔드는 정상이다.

3. **프론트엔드**를 로컬에서 띄운다.

   ```bash
   cd frontend && npm run dev
   ```

4. 브라우저에서 **http://localhost:3000** 접속 → 포트폴리오가 백엔드 API에서 로드된다.

### 웹(프론트)에서 연결이 안 될 때

- **프론트 주소**: 반드시 **http://localhost:3000** (또는 http://127.0.0.1:3000)으로 접속한다.  
  백엔드 주소 **http://localhost:8000** 으로만 열면 포트폴리오 페이지가 아니다.
- **목록이 안 뜨거나 에러**가 나면, 프론트에서 백엔드를 직접 바라보게 한다.  
  `frontend` 폴더에 `.env.local` 파일을 만들고:

  ```env
  NEXT_PUBLIC_API_URL=http://localhost:8000
  ```

  저장한 뒤 `npm run dev` 를 다시 실행하고, **http://localhost:3000** 에서 다시 접속해 본다.

- **CORS 에러**가 나면 백엔드가 다시 띄워진 상태인지 확인한다.  
  `docker compose up -d` 로 백엔드를 재시작한 뒤에도 안 되면, 위 `NEXT_PUBLIC_API_URL` 설정으로 브라우저가 직접 8000 포트로 요청하므로 CORS 설정이 적용된다.

---

## 3. 데이터 관리

포트폴리오 데이터는 **DB에 저장**됩니다.  
Admin에서 직접 항목을 추가/수정하거나, DB에 직접 넣어 관리합니다.

### 로컬에서 DB만 사용 (Docker 없이)

PostgreSQL 없이 SQLite로 DB에 데이터를 넣어서 쓰려면:

```bash
cd backend
USE_SQLITE=1 python manage.py migrate --noinput
USE_SQLITE=1 python manage.py runserver
```

이후 API는 http://localhost:8000/api/portfolio/ 에서 제공되며, **데이터는 모두 DB(db.sqlite3)에만** 있습니다.

---

## 4. Admin 슈퍼유저 만들기

```bash
cd backend
docker compose exec backend python manage.py createsuperuser
```

이후 http://localhost:8000/admin 에서 로그인 가능.
