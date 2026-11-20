import type { PortfolioProps } from "../types";

export default {
    id: "globalNomad",
    category: "Team Project",
    title: "GlobalNomad",
    image: "/images/GlobalNomad/GlobalNomad.svg",
    intro: "취미활동 참여 및 주최 플랫폼",
    link: "https://globalnomad-t2.vercel.app/",
    github: "https://github.com/T2-GlobalNomad/GlobalNomad",
    thumbnail: "/images/GlobalNomad/GlobalNomadTN.png",
    overviewImages: [
        {
            section: "메인 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad1.png",
                    alt: "GlobalNomad main page",
                },
            ],
        },
        {
            section: "체험 상세 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad2.png",
                    alt: "rolling main page",
                },
                {
                    src: "/images/GlobalNomad/GlobalNomad2-1.png",
                    alt: "rolling main page",
                },
            ],
        },
        {
            section: "내 정보 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad3.png",
                    alt: "rolling main page",
                },
            ],
        },
        {
            section: "예약 내역 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad4.png",
                    alt: "rolling main page",
                },
            ],
        },
        {
            section: "내 체험 관리 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad5.png",
                    alt: "rolling main page",
                },
                {
                    src: "/images/GlobalNomad/GlobalNomad5-1.png",
                    alt: "rolling main page",
                },
            ],
        },
        {
            section: "예약 현황 페이지",
            images: [
                {
                    src: "/images/GlobalNomad/GlobalNomad6.png",
                    alt: "rolling main page",
                },
            ],
        },
    ],
    features: [
        {
            title: "롤링페이퍼",
            description: "나만의 롤링페이퍼를 만들고, 누군가가 남기는 메세지를 받을 수 있어요.",
        },
        {
            title: "메세지보내기",
            description: "내가 원하는 사람에게 메세지를 보내기가 가능합니다.",
        },
        {
            title: "인기 롤링페이퍼",
            description: "상대방에 대한 내 기분을 이모지로 표현 할 수 있어요.",
        },
    ],
    tools: [
        {
            src: "/logo/react.png",
            alt: "react",
        },
        {
            src: "/logo/typescript.png",
            alt: "typescript",
        },
        {
            src: "/logo/reactQuery.svg",
            alt: "react query",
        },
        {
            src: "/logo/moduleCSS.png",
            alt: "module css",
        },
        {
            src: "/logo/vercel.svg",
            alt: "vercel",
        },
        {
            src: "/logo/prettier.svg",
            alt: "prettier",
        },
        {
            src: "/logo/ESLint.png",
            alt: "ESLint",
        },
        {
            src: "/logo/zod.png",
            alt: "zod",
        },
        {
            src: "/logo/zustand.webp",
            alt: "zustand",
        },
        {
            src: "/logo/storybook.png",
            alt: "storybook",
        },
    ],
    rnr: ["API", "Query hooks", "내 정보 페이지", "예약 현황 페이지"],
} satisfies PortfolioProps;
