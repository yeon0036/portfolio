import type { PortfolioProps } from "../types";

export default {
    id: "BBU",
    title: "쀼 (BBU)",
    image: "/images/BBU/BBU.svg",
    intro: "이혼·재혼·미혼 사용자를 위한 매칭·변호사 상담 서비스",
    category: "Work Experience",
    type: "Mobile",
    link: "https://bbufe-production.up.railway.app/",
    github: "",
    thumbnail: "/images/BBU/BBU.svg",
    overviewImages: [
        {
            section: "메인화면",
            images: [
                {
                    src: "/images/BBU/BBU1.png",
                    alt: "BBU 메인화면",
                },
            ],
        },
        {
            section: "프로필 상세",
            images: [
                {
                    src: "/images/BBU/BBU2.png",
                    alt: "BBU 프로필 상세",
                },
            ],
        },
        {
            section: "커뮤니티",
            images: [
                {
                    src: "/images/BBU/BBU3.png",
                    alt: "BBU 커뮤니티",
                },
            ],
        },
        {
            section: "커뮤니티 작성",
            images: [
                {
                    src: "/images/BBU/BBU3-1.png",
                    alt: "BBU 커뮤니티 작성",
                },
            ],
        },
        {
            section: "커뮤니티 상세",
            images: [
                {
                    src: "/images/BBU/BBU3-2.png",
                    alt: "BBU 커뮤니티 상세",
                },
            ],
        },
        {
            section: "채팅",
            images: [
                {
                    src: "/images/BBU/BBU4.png",
                    alt: "BBU 채팅",
                },
            ],
        },
        {
            section: "전문가 채팅 종료",
            images: [
                {
                    src: "/images/BBU/BBU4-1.png",
                    alt: "BBU 채팅 상세",
                },
            ],
        },
        {
            section: "마이페이지",
            images: [
                {
                    src: "/images/BBU/BBU5.png",
                    alt: "BBU 마이페이지",
                },
            ],
        },
        {
            section: "크레딧 사용 내역",
            images: [
                {
                    src: "/images/BBU/BBU5-1.png",
                    alt: "BBU 크레딧 사용 내역",
                },
            ],
        },
        {
            section: "크레딧 결제",
            images: [
                {
                    src: "/images/BBU/BBU5-2.png",
                    alt: "BBU 크레딧 결제",
                },
            ],
        },
        {
            section: "인기도",
            images: [
                {
                    src: "/images/BBU/BBU5-3.png",
                    alt: "BBU 인기도",
                },
            ],
        },
        {
            section: "전문가 리스트",
            images: [
                {
                    src: "/images/BBU/BBU6.png",
                    alt: "BBU 전문가 리스트",
                },
            ],
        },
        {
            section: "전문가 상세",
            images: [
                {
                    src: "/images/BBU/BBU6-1.png",
                    alt: "BBU 전문가 상세",
                },
            ],
        },
        {
            section: "전문가 리뷰",
            images: [
                {
                    src: "/images/BBU/BBU6-2.png",
                    alt: "BBU 전문가 리뷰",
                },
            ],
        },
    ],
    features: [
        {
            title: "프로필 탐색·매칭",
            description: "프로필을 스와이프해 상대를 탐색하고, 상세 정보와 관계 상태를 확인합니다.",
        },
        {
            title: "커뮤니티",
            description: "게시글을 작성하고 다른 사용자와 경험·고민을 공유합니다.",
        },
        {
            title: "채팅 상담",
            description: "매칭 후 채팅으로 상담하며, 진행 중인 상담과 종료된 상담을 구분합니다.",
        },
        {
            title: "전문가 탐색",
            description: "전문 분야·리뷰·평점을 확인하고 상담할 전문가를 선택합니다.",
        },
        {
            title: "내 정보·크레딧 관리",
            description:
                "내 정보와 인기도를 확인하고, 상담용 크레딧을 결제하거나 사용 내역을 조회합니다.",
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
        "프론트엔드·백엔드 전반 단독 개발",
        "스와이프 매칭 UI와 상태 관리 구현",
        "전문가 탐색·채팅 상담 화면 및 API 연동",
        "인증에 따른 화면 접근 제어와 서버 인증 처리",
        "공통 컴포넌트·훅·서버 로직 분리",
    ],
} satisfies PortfolioProps;
