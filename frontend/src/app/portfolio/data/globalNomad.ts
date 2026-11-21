import type { PortfolioProps } from "../types";

export default {
    id: "globalNomad",
    category: "Team Project",
    title: "GlobalNomad",
    image: "/images/GlobalNomad/GlobalNomad.svg",
    intro: "다양한 체험을 탐색·예약하고 직접 주최하는 플랫폼",
    link: "https://globalnomad-t2.vercel.app/",
    github: "https://github.com/T2-GlobalNomad/GlobalNomad",
    thumbnail: "/images/GlobalNomad/GlobalNomadTN.png",
    overviewImages: [
        {
            section: "메인 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad1.png",
                    alt: "GlobalNomad 메인 화면",
                },
            ],
        },
        {
            section: "체험 상세 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad2.png",
                    alt: "GlobalNomad 체험 상세",
                },
                {
                    src: "/images/GlobalNomad/GlobalNomad2-1.png",
                    alt: "GlobalNomad 체험 상세 안내",
                },
            ],
        },
        {
            section: "내 정보 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad3.png",
                    alt: "GlobalNomad 내 정보",
                },
            ],
        },
        {
            section: "예약 내역 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad4.png",
                    alt: "GlobalNomad 예약 내역",
                },
            ],
        },
        {
            section: "내 체험 관리 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad5.png",
                    alt: "GlobalNomad 내 체험 관리",
                },
                {
                    src: "/images/GlobalNomad/GlobalNomad5-1.png",
                    alt: "GlobalNomad 체험 관리 상세",
                },
            ],
        },
        {
            section: "예약 현황 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad6.png",
                    alt: "GlobalNomad 예약 현황",
                },
            ],
        },
    ],
    features: [
        {
            title: "체험 탐색",
            description: "체험 목록에서 관심 있는 활동을 찾고 상세 정보를 확인합니다.",
        },
        {
            title: "예약 관리",
            description: "내가 예약한 체험 내역을 확인합니다.",
        },
        {
            title: "체험 주최·운영",
            description: "내가 등록한 체험과 해당 체험의 예약 현황을 관리합니다.",
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
            src: "/logo/reactQuery.svg",
            alt: "React Query",
        },
        {
            src: "/logo/moduleCSS.png",
            alt: "CSS Modules",
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
        {
            src: "/logo/zod.png",
            alt: "Zod",
        },
        {
            src: "/logo/zustand.webp",
            alt: "Zustand",
        },
        {
            src: "/logo/storybook.png",
            alt: "Storybook",
        },
    ],
    rnr: [
        "API 연동 및 데이터 조회용 Query 훅 작성",
        "내 정보 페이지 구현",
        "예약 현황 페이지 구현",
    ],
} satisfies PortfolioProps;
