import type { PortfolioProps } from "../types";

export default {
    id: "whyne",
    title: "WHYNE",
    image: "/images/WHYNE/WHYNE.svg",
    intro: "와인 관련 정보공유 커뮤니티",
    category: "Team Project",
    link: "https://wyene-yeon.vercel.app/",
    github: "https://github.com/yujuseop/Project-Team2-WINE",
    thumbnail: "/images/WHYNE/WHYNETN.png",
    overviewImages: [
        {
            section: "메인 페이지",
            images: [
                {
                    src: "/images/WHYNE/WHYNE1.png",
                    alt: "WHYNE main page",
                },
            ],
        },
        {
            section: "검색 기능",
            images: [
                {
                    src: "/images/WHYNE/WHYNE1-1.png",
                    alt: "WHYNE main page - search",
                },
            ],
        },
        {
            section: "와인 상세 페이지",
            images: [
                {
                    src: "/images/WHYNE/WHYNE2.png",
                    alt: "WHYNE detail page",
                },
            ],
        },
        {
            section: "리뷰 작성",
            images: [
                {
                    src: "/images/WHYNE/WHYNE2-1.png",
                    alt: "WHYNE detail page - review",
                },
            ],
        },
        {
            section: "마이페이지",
            images: [
                {
                    src: "/images/WHYNE/WHYNE3.png",
                    alt: "WHYNE mypage",
                },
            ],
        },
        {
            section: "프로필 수정",
            images: [
                {
                    src: "/images/WHYNE/WHYNE3-1.png",
                    alt: "WHYNE mypage - edit",
                },
            ],
        },
    ],
    features: [
        {
            title: "메인 페이지",
            description:
                "전체 와인 리스트를 확인할 수 있으며, 이름 또는 조건 검색을 통해 원하는 와인을 빠르게 찾을 수 있습니다.",
        },
        {
            title: "상세 페이지 및 리뷰",
            description:
                "와인 상세 페이지에서는 다른 유저들이 남긴 리뷰와 평점을 확인할 수 있으며, 나만의 리뷰도 작성할 수 있습니다.",
        },
        {
            title: "마이페이지",
            description:
                "작성한 리뷰, 등록한 와인 내역을 관리(수정/삭제)할 수 있고, 내 프로필 정보도 수정할 수 있습니다.",
        },
    ],
    tools: [
        {
            src: "/logo/react.png",
            alt: "React",
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
    rnr: ["공통 Button 컴포넌트 및 Global CSS", "마이페이지(내 정보) 구현"],
} satisfies PortfolioProps;
