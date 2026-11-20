import type { PortfolioProps } from "../types";

export default {
    id: "rolling",
    title: "Rolling",
    category: "Team Project",
    image: "/images/Rolling/Rolling.svg",
    intro: "익명/비익명 메세지 전달 플랫폼",
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
            description:
                "사용자 본인만의 롤링페이퍼를 개설할 수 있으며, 이를 통해 다양한 메세지를 받을 수 있습니다.",
        },
        {
            title: "메세지 작성",
            description: "원하는 대상의 롤링페이퍼에 자유롭게 메세지를 작성할 수 있습니다.",
        },
        {
            title: "감정 이모지 표현",
            description: "상대방에 대한 감정을 다양한 이모지로 표현해, 메시지에 감성을 더합니다.",
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
            alt: "CSS Module",
        },
        {
            src: "/logo/vercel.svg",
            alt: "Vercel",
        },
        {
            src: "/logo/prettier.svg",
            alt: "prettier",
        },
    ],
    rnr: ["공통 Button 컴포넌트 개발", "롤링페이퍼 생성 페이지 구현"],
} satisfies PortfolioProps;
