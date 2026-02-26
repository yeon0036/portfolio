# Portfolio Django Backend

`src/app/portfolio/PortfolioData.ts` 구조를 기반으로 한 Django REST API + Docker 백엔드입니다.

## 요구 사항

- Docker & Docker Compose
- (로컬 실행 시) Python 3.12+, PostgreSQL

## Docker로 실행

```bash
cd backend
docker compose up --build
```

- API: http://localhost:8000/api/portfolio/
- Admin: http://localhost:8000/admin (슈퍼유저 생성 필요 시 컨테이너 내부에서 `python manage.py createsuperuser`)

## API 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/portfolio/` | 포트폴리오 목록 (프론트엔드 `portfolioData`와 동일한 배열 형태, camelCase) |
| GET | `/api/portfolio/<id>/` | 단일 항목 상세 |
| GET | `/api/portfolio/?category=Work%20Experience` | 카테고리 필터 |
| GET | `/api/portfolio/?type=portfolio` | 타입 필터 (portfolio \| design) |

응답 필드명은 프론트엔드 타입(`PortfolioProps` / `DesignProps`)과 맞춰 camelCase로 반환됩니다.

## 초기 데이터

- 포트폴리오 데이터는 **DB에만 저장**됩니다.
- Admin에서 직접 항목을 추가/수정하거나, DB에 직접 넣어 관리합니다.

## 로컬 개발 (Docker 없이)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
export POSTGRES_HOST=localhost
export POSTGRES_PASSWORD=portfolio
export POSTGRES_USER=portfolio
export POSTGRES_DB=portfolio_db
python manage.py migrate
python manage.py runserver
```

PostgreSQL은 로컬에 설치되어 있어야 하며, DB/유저/비밀번호는 위 환경 변수와 맞추면 됩니다.

## CORS

기본값으로 `http://localhost:3000`, `http://127.0.0.1:3000`이 허용됩니다.  
다른 origin이 필요하면 환경 변수 `CORS_ORIGINS`에 쉼표로 구분해 지정하세요.

## 프로젝트 구조

```
backend/
├── config/           # Django 설정
├── portfolio/        # 앱: 모델, 시리얼라이저, 뷰, 관리 명령
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── README.md
```
