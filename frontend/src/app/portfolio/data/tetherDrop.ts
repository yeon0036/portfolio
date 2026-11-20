import type { PortfolioProps } from "../types";

export default {
    id: "TetherDrop",
    title: "TetherDrop",
    image: "/images/TetherDrop/TetherDrop.svg",
    intro: "코인 거래 플랫폼",
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
                    alt: "TederDrop 소개 페이지",
                },
            ],
        },
        {
            section: "등록 방법 안내",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop2.png",
                    alt: "TederDrop 등록방법",
                },
            ],
        },
        {
            section: "이벤트 페이지",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop3.png",
                    alt: "TederDrop 이벤트 페이지",
                },
            ],
        },
        {
            section: "거래소 리스트",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop4.png",
                    alt: "TederDrop 제휴 거래소",
                },
            ],
        },
        {
            section: "거래소 상세 페이지",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop5.png",
                    alt: "TederDrop 제휴 거래소 상세",
                },
            ],
        },
        {
            section: "step 제어페이지(테스트 페이지 예시)",
            images: [
                {
                    src: "/images/TetherDrop/TetherDrop6.png",
                    alt: "TederDrop Step별 제어 페이지",
                },
            ],
        },
    ],
    features: [
        {
            title: "소개 페이지",
            description: "해당 사의 장점과 서비스를 소개하는 페이지 입니다.",
        },
        {
            title: "이용방법 페이지",
            description:
                "테더드랍의 서비스를 이용하기 위해 등록 방법을 순차적으로 안내해주는 페이지 입니다.",
        },
        {
            title: "제휴거래소 및 상세",
            description:
                "테더드랍과 제휴를 맺은 거래소의 리스트 페이지입니다. 해당 거래소의 상세 페이지를 들어가면 타 사와 비교해 얻을 수 있는 베네핏 등의 정보를 확인할 수 있습니다.",
        },
        {
            title: "마이페이지 및 파트너페이지",
            description:
                "사용자가 거래한 내역, 등록한 거래소의 계정 등을 관리할 수 있습니다. 로그아웃/회원가입을 제어할 수 있습니다. 파트너로 등록된 경우, 파트너로의 레퍼럴 혜택 등을 정리한 내역을 확인할 수 있습니다.",
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
            alt: "Tailwind",
        },
        {
            src: "/logo/vercel.svg",
            alt: "Vercel",
        },
        {
            src: "/logo/prettier.svg",
            alt: "prettier",
        },
        {
            src: "/logo/ESLint.png",
            alt: "ESLint",
        },
    ],
    rnr: [
        "주요 데이터 연결 및 CRUD 제어",
        "마이페이지 및 파트너페이지",
        "제휴거래소 및 상세페이지",
        "Step progress 사용 컴포넌트 및 페이지",
    ],
} satisfies PortfolioProps;
