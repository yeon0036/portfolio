import type { PortfolioProps } from "../types";

export default {
    id: "TetherDrop",
    title: "TetherDrop",
    image: "/images/TetherDrop/TetherDrop.svg",
    intro: "제휴 거래소 혜택을 비교하고 계정·거래 내역을 관리하는 서비스",
    category: "Work Experience",
    link: "https://www.tetherdrop.io/",
    github: "",
    thumbnail: "/images/TetherDrop/TetherDropTN.png",
    overviewImages: [
        {
            section: "소개 페이지",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop1.png",
                    alt: "TetherDrop 소개 페이지",
                },
            ],
        },
        {
            section: "등록 방법 안내",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop2.png",
                    alt: "TetherDrop 등록방법",
                },
            ],
        },
        {
            section: "이벤트 페이지",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop3.png",
                    alt: "TetherDrop 이벤트 페이지",
                },
            ],
        },
        {
            section: "거래소 리스트",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop4.png",
                    alt: "TetherDrop 제휴 거래소",
                },
            ],
        },
        {
            section: "거래소 상세 페이지",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop5.png",
                    alt: "TetherDrop 제휴 거래소 상세",
                },
            ],
        },
        {
            section: "단계별 진행 UI · 테스트 화면",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop6.png",
                    alt: "TetherDrop Step별 제어 페이지",
                },
            ],
        },
    ],
    features: [
        {
            title: "서비스·이용 안내",
            description: "서비스 혜택을 소개하고, 등록 방법을 단계별로 안내합니다.",
        },
        {
            title: "제휴 거래소 비교",
            description: "제휴 거래소 목록과 상세 페이지에서 거래소별 혜택을 비교합니다.",
        },
        {
            title: "계정·거래 내역 관리",
            description: "마이페이지에서 등록한 거래소 계정과 거래 내역을 관리합니다.",
        },
        {
            title: "파트너 혜택 조회",
            description: "파트너 계정으로 추천인 혜택 내역을 확인합니다.",
        },
    ],
    tools: [
        {
            src: "/logo/react.png",
            alt: "React",
        },
        {
            src: "/logo/typescript.png",
            alt: "TypeScript",
        },
        {
            src: "/logo/serverAction.png",
            alt: "Server Actions",
        },
        {
            src: "/logo/Prisma.png",
            alt: "Prisma",
        },
        {
            src: "/logo/supabase.png",
            alt: "Supabase",
        },
        {
            src: "/logo/tailwind.png",
            alt: "Tailwind CSS",
        },
        {
            src: "/logo/vercel.svg",
            alt: "Vercel",
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
        "주요 데이터 연동 및 생성·조회·수정·삭제 처리",
        "마이페이지·파트너 페이지 구현",
        "제휴 거래소 목록·상세 페이지 구현",
        "단계별 진행 컴포넌트와 관련 페이지 구현",
    ],
} satisfies PortfolioProps;
