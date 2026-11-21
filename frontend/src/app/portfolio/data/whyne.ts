import type { PortfolioProps } from "../types";

export default {
    id: "whyne",
    title: "WHYNE",
    image: "/images/WHYNE/WHYNE.svg",
    intro: "와인을 탐색하고 리뷰·평점을 공유하는 커뮤니티",
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
            title: "와인 탐색·검색",
            description: "이름과 조건으로 와인을 검색하고 목록을 확인합니다.",
        },
        {
            title: "와인 상세·리뷰",
            description: "다른 사용자의 리뷰·평점을 확인하고 내 리뷰를 작성합니다.",
        },
        {
            title: "내 활동 관리",
            description: "작성한 리뷰·등록한 와인을 관리하고 프로필을 수정합니다.",
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
    rnr: ["공통 버튼 컴포넌트 및 전역 스타일 작성", "마이페이지 구현"],
} satisfies PortfolioProps;
