import type { PortfolioProps } from "../types";

export default {
    id: "MPZ",
    title: "마펫쯔 (MPZ)",
    image: "/images/MPZ/MPZ.png",
    intro: "보호동물 탐색부터 입양 신청까지 연결하는 반려동물 플랫폼",
    category: "Work Experience",
    type: "Mobile",
    link: "https://mpz.kr/",
    github: "",
    thumbnail: "/images/MPZ/MPZ.png",
    overviewImages: [
        {
            section: "로그인",
            images: [
                {
                    src: "/images/MPZ/MPZ1.png",
                    alt: "MPZ 로그인",
                },
            ],
        },
        {
            section: "메인 탐색",
            images: [
                {
                    src: "/images/MPZ/MPZ2.png",
                    alt: "MPZ 메인 탐색",
                },
            ],
        },
        {
            section: "동물 리스트",
            images: [
                {
                    src: "/images/MPZ/MPZ3.png",
                    alt: "MPZ 동물 리스트",
                },
            ],
        },
        {
            section: "동물 상세",
            images: [
                {
                    src: "/images/MPZ/MPZ3-1.png",
                    alt: "MPZ 동물 상세",
                },
            ],
        },
        {
            section: "센터 리스트",
            images: [
                {
                    src: "/images/MPZ/MPZ4.png",
                    alt: "MPZ 센터 리스트",
                },
            ],
        },
        {
            section: "센터 상세",
            images: [
                {
                    src: "/images/MPZ/MPZ4-1.png",
                    alt: "MPZ 센터 상세",
                },
            ],
        },
        {
            section: "커뮤니티 목록",
            images: [
                {
                    src: "/images/MPZ/MPZ5.png",
                    alt: "MPZ 커뮤니티 목록",
                },
            ],
        },
        {
            section: "커뮤니티 작성",
            images: [
                {
                    src: "/images/MPZ/MPZ6.png",
                    alt: "MPZ 커뮤니티 작성",
                },
            ],
        },
        {
            section: "커뮤니티 상세",
            images: [
                {
                    src: "/images/MPZ/MPZ7.png",
                    alt: "MPZ 커뮤니티 상세",
                },
            ],
        },
        {
            section: "찜 목록 - 동물",
            images: [
                {
                    src: "/images/MPZ/MPZ9.png",
                    alt: "MPZ 찜 목록 - 동물",
                },
            ],
        },
        {
            section: "찜 목록 - 센터",
            images: [
                {
                    src: "/images/MPZ/MPZ10.png",
                    alt: "MPZ 찜 목록 - 센터",
                },
            ],
        },
        {
            section: "마이페이지",
            images: [
                {
                    src: "/images/MPZ/MPZ11.png",
                    alt: "MPZ 마이페이지",
                },
            ],
        },
        {
            section: "마이페이지 - 입양신청 상세",
            images: [
                {
                    src: "/images/MPZ/MPZ12.png",
                    alt: "MPZ 입양 신청 상세",
                },
            ],
        },
    ],
    features: [
        {
            title: "보호동물 탐색",
            description: "지역별 보호동물 목록에서 동물 정보와 입양 정보를 확인합니다.",
        },
        {
            title: "보호센터 안내",
            description: "보호센터 목록과 상세 정보를 확인하고, 관련 보호동물을 탐색합니다.",
        },
        {
            title: "커뮤니티",
            description: "게시글을 작성하고 반려동물 관련 경험을 공유합니다.",
        },
        {
            title: "관심 목록",
            description: "관심 있는 보호동물과 보호센터를 각각 저장하고 다시 확인합니다.",
        },
        {
            title: "내 정보·입양 신청",
            description: "로그인 후 내 정보와 입양 신청 내역을 한곳에서 관리합니다.",
        },
    ],
    tools: [
        {
            src: "/logo/react.png",
            alt: "React",
        },
        {
            src: "/logo/NextJs.svg",
            alt: "Next.js",
        },
        {
            src: "/logo/typescript.png",
            alt: "TypeScript",
        },
        {
            src: "/logo/tailwind.png",
            alt: "Tailwind CSS",
        },
        {
            src: "/logo/python.png",
            alt: "Python",
        },
        {
            src: "/logo/Django.png",
            alt: "Django",
        },
        {
            src: "/logo/PostgreSQL.png",
            alt: "PostgreSQL",
        },
        {
            src: "/logo/capacitor.png",
            alt: "Capacitor",
        },
        {
            src: "/logo/railway.png",
            alt: "Railway",
        },
        {
            src: "/logo/prettier.svg",
            alt: "Prettier",
        },
        {
            src: "/logo/ESLint.png",
            alt: "ESLint",
        },
    ],
    rnr: [
        "프론트엔드·백엔드 전반 개발 — 공공 데이터 수집과 초기 데이터 구조 설계 제외",
        "보호동물 탐색 화면, 지역 필터·탭 상태 관리 및 API 연동",
        "커뮤니티·관심 목록·마이페이지의 화면과 서버 로직 구현",
        "공통 컴포넌트 및 API 구조 정리",
    ],
} satisfies PortfolioProps;
