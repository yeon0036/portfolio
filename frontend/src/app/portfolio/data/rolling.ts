import type { PortfolioProps } from "../types";

export default {
    id: "rolling",
    title: "Rolling",
    category: "Team Project",
    image: "/images/Rolling/Rolling.svg",
    intro: "익명·기명 메시지와 감정을 나누는 온라인 롤링페이퍼",
    link: "https://rolling-yeon.vercel.app/",
    github: "https://github.com/y5037/Rolling",
    thumbnail: "/images/Rolling/RollingTN.png",
    overviewImages: [
        {
            section: "메인 페이지",
            images: [
                {
                    src: "/images/Rolling/Rolling1.png",
                    alt: "rolling main page",
                },
            ],
        },
        {
            section: "롤링페이퍼 상세 페이지",
            images: [
                {
                    src: "/images/Rolling/Rolling2.png",
                    alt: "rolling detail page",
                },
            ],
        },
        {
            section: "롤링페이퍼 개설 페이지",
            images: [
                {
                    src: "/images/Rolling/Rolling3.png",
                    alt: "rolling create page",
                },
            ],
        },
    ],
    features: [
        {
            title: "롤링페이퍼 생성",
            description: "나만의 롤링페이퍼를 만들고 다른 사람의 메시지를 받습니다.",
        },
        {
            title: "메시지 작성",
            description: "상대방의 롤링페이퍼에 익명 또는 이름을 표시해 메시지를 남깁니다.",
        },
        {
            title: "이모지 반응",
            description: "이모지로 상대방에게 감정을 표현합니다.",
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
            src: "/logo/restAPI.png",
            alt: "REST API",
        },
        {
            src: "/logo/styledComponents.png",
            alt: "Styled Components",
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
    ],
    rnr: ["공통 Button 컴포넌트 개발", "롤링페이퍼 생성 페이지 구현"],
} satisfies PortfolioProps;
