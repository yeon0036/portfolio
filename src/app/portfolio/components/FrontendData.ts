// Types
export interface PortfolioProps {
  id: string;
  category: string;
  title: string;
  intro: string;
  image: string;
  link: string;
  github: string;
  thumbnail: string;
  overviewImages: {
    section: string;
    images: { src: string; alt: string }[];
  }[];
  features: { title: string; description: string }[];
  tools: { src: string; alt: string }[];
  rnr: string[];
}

// Data
export const portfolioData = [
  {
    id: "globalNomad",
    category: "TypeScript",
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
        description:
          "나만의 롤링페이퍼를 만들고, 누군가가 남기는 메세지를 받을 수 있어요.",
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
      { src: "/logo/typescript.png", alt: "ts" },
      { src: "/logo/react.png", alt: "react" },
      { src: "/logo/reactQuery.svg", alt: "react query" },
      { src: "/logo/moduleCSS.png", alt: "module css" },
      { src: "/logo/vercel.svg", alt: "vercel" },
      { src: "/logo/prettier.svg", alt: "prettier" },
      { src: "/logo/ESLint.png", alt: "ESLint" },
      { src: "/logo/zod.png", alt: "zod" },
      { src: "/logo/zustand.webp", alt: "zustand" },
      { src: "/logo/storybook.png", alt: "storybook" },
    ],
    rnr: ["API", "Query hooks", "내 정보 페이지", "예약 현황 페이지"],
  },

  // rolling
  {
    id: "rolling",
    title: "Rolling",
    category: "Typescript",
    image: "/images/Rolling/Rolling.svg",
    intro: "익명/비익명 메세지 전달 플랫폼",
    link: "https://rolling-yeon.vercel.app/",
    github: "https://github.com/y5037/Rolling",
    thumbnail: "/images/Rolling/RollingTN.png",
    overviewImages: [
      {
        section: "메인 페이지",
        images: [
          { src: "/images/Rolling/Rolling1.png", alt: "rolling main page" },
        ],
      },
      {
        section: "롤링페이퍼 상세 페이지",
        images: [
          { src: "/images/Rolling/Rolling2.png", alt: "rolling detail page" },
        ],
      },
      {
        section: "롤링페이퍼 개설 페이지",
        images: [
          { src: "/images/Rolling/Rolling3.png", alt: "rolling create page" },
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
        description:
          "원하는 대상의 롤링페이퍼에 자유롭게 메세지를 작성할 수 있습니다.",
      },
      {
        title: "감정 이모지 표현",
        description:
          "상대방에 대한 감정을 다양한 이모지로 표현해, 메시지에 감성을 더합니다.",
      },
    ],
    tools: [
      { src: "/logo/javascript.png", alt: "JavaScript" },
      { src: "/logo/react.png", alt: "React" },
      { src: "/logo/restAPI.png", alt: "REST API" },
      { src: "/logo/styledComponents.png", alt: "Styled Components" },
      { src: "/logo/moduleCSS.png", alt: "CSS Module" },
      { src: "/logo/vercel.svg", alt: "Vercel" },
      { src: "/logo/prettier.svg", alt: "prettier" },
    ],
    rnr: ["공통 Button 컴포넌트 개발", "롤링페이퍼 생성 페이지 구현"],
  },

  // whyne
  {
    id: "whyne",
    title: "WHYNE",
    image: "/images/WHYNE/WHYNE.svg",
    intro: "와인 관련 정보공유 커뮤니티",
    category: "TypeScript",
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
      { src: "/logo/typescript.png", alt: "TypeScript" },
      { src: "/logo/react.png", alt: "React" },
      { src: "/logo/restAPI.png", alt: "REST API" },
      { src: "/logo/styledComponents.png", alt: "Styled Components" },
      { src: "/logo/moduleCSS.png", alt: "CSS Module" },
      { src: "/logo/vercel.svg", alt: "Vercel" },
      { src: "/logo/prettier.svg", alt: "prettier" },
    ],
    rnr: ["공통 Button 컴포넌트 및 Global CSS", "마이페이지(내 정보) 구현"],
  },
];
