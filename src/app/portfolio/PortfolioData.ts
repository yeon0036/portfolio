import { PortfolioProps, DesignProps } from "./types";

export const portfolioData: (PortfolioProps | DesignProps)[] = [
  /** @TetherDrop */
  {
    id: "TetherDrop",
    title: "TetherDrop",
    image: "/images/TetherDrop/TetherDrop.svg",
    intro: "코인 거래 플랫폼",
    category: "Internship",
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
      { src: "/logo/Project.png", alt: "Project" },
      { src: "/logo/react.png", alt: "React" },
      { src: "/logo/serverAction.png", alt: "Server Actions" },
      { src: "/logo/Prisma.png", alt: "Prisma" },
      { src: "/logo/supabase.png", alt: "Supabase" },
      { src: "/logo/tailwind.png", alt: "Tailwind" },
      { src: "/logo/vercel.svg", alt: "Vercel" },
      { src: "/logo/prettier.svg", alt: "prettier" },
      { src: "/logo/ESLint.png", alt: "ESLint" },
    ],
    rnr: [
      "주요 데이터 연결 및 CRUD 제어",
      "마이페이지 및 파트너페이지",
      "제휴거래소 및 상세페이지",
      "Step progress 사용 컴포넌트 및 페이지",
    ],
  },
  /** @GlobalNomad */
  {
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
      { src: "/logo/Project.png", alt: "ts" },
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

  /** @Rolling */
  {
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
      { src: "/logo/Team Project.png", alt: "Team Project" },
      { src: "/logo/react.png", alt: "React" },
      { src: "/logo/restAPI.png", alt: "REST API" },
      { src: "/logo/styledComponents.png", alt: "Styled Components" },
      { src: "/logo/moduleCSS.png", alt: "CSS Module" },
      { src: "/logo/vercel.svg", alt: "Vercel" },
      { src: "/logo/prettier.svg", alt: "prettier" },
    ],
    rnr: ["공통 Button 컴포넌트 개발", "롤링페이퍼 생성 페이지 구현"],
  },

  /** @Whyne */
  {
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
      { src: "/logo/Project.png", alt: "Project" },
      { src: "/logo/react.png", alt: "React" },
      { src: "/logo/restAPI.png", alt: "REST API" },
      { src: "/logo/styledComponents.png", alt: "Styled Components" },
      { src: "/logo/moduleCSS.png", alt: "CSS Module" },
      { src: "/logo/vercel.svg", alt: "Vercel" },
      { src: "/logo/prettier.svg", alt: "prettier" },
    ],
    rnr: ["공통 Button 컴포넌트 및 Global CSS", "마이페이지(내 정보) 구현"],
  },

  /** @With */
  {
    id: "with",
    title: "With",
    category: "Team Project",
    image: "/images/WITH/WITH.png",
    intro: "동아리 활동 총 관리 앱 UIUX",
    link: "https://xd.adobe.com/view/d10f6bd5-2d5e-4457-915b-1ee6b0f4065c-845c/?fullscreen",
    thumbnail: "/images/WITH/withTN.jpg",
    details: {
      functions: [
        {
          title: "동아리 둘러보기",
          desc: "내가 재학중인 대학교에 어떤 동아리가 있는지 둘러볼 수 있어요.",
        },
        {
          title: "메세지보내기",
          desc: "내가 원하는 사람에게 메세지를 보내기가 가능합니다.",
        },
        {
          title: "채팅/마이페이지",
          desc: "내가 속한 동아리의 채팅에 참여할 수 있고, 내 정보 둘러보기를 할 수 있어요.",
        },
        {
          title: "내 동아리",
          desc: "내가 속한 동아리의 전체 일정, 커뮤니티 등을 확인할 수 있어요.",
        },
      ],
      tools: [{ src: "/logo/xd.png", alt: "xd" }],
      rnr: ["동아리 탐색", "메인 페이지", "검색 페이지", "마이페이지 일부"],
      build: {
        motivation: [
          "카카오톡, 엑셀, 워드, 인스타 등 하나의 동아리 관리를 위해 사용되는 어플이 너무 많음",
          "동아리 모집 공고를 한 곳에서 확인하고싶음",
          "관심있는 동아리에 대한 정보에 간단히 접근하고 싶음",
          "중요한 공지를 모든 채팅방마다 해야하는 것이 번거로움",
        ],
        competitors: [
          {
            name: "소모임",
            info: [
              "목적: 누구나 쉽게 자신의 지역과 관심사에 맞는 모임을 찾을 수 있다.",
              "타겟층: 오프라인 취미 활동 모임을 찾는 고객",
              "강점: 다양한 모임 카테고리",
              "약점: 무분별한 초대기능",
            ],
          },
          {
            name: "모두의동아리",
            info: [
              "목적: 주변에 물어볼 사람이 없는 학생들에게 동아리에 관한 유용한 정보들을 제공",
              "타겟층: 동아리 활동을 하는 대학생들",
              "강점: 학교 이메일 인증, 동아리장 양도 기능",
              "약점: IOS 기기 사용 불가",
            ],
          },
          {
            name: "네이버밴드",
            info: [
              "목적: 가족, 커플, 친구, 학교, 회사, 동호회 등 모든 종류의 모임 운영을 쉽게 가능하게 하는 공간 제공",
              "타겟층: 모임에 참여하는 모든 사람",
              "강점: 밴드 활용법 가이드 제공, 많은 사진 업로드 가능",
              "약점: 올드한 인식, 폐쇄적인 성격",
            ],
          },
        ],
      },
    },
    overviewImages: [
      {
        section: "로그인/회원가입",
        images: [
          { src: "/images/WITH/overview1.jpg", alt: "with login/signup" },
        ],
      },
      {
        section: "메인페이지",
        images: [{ src: "/images/WITH/overview2.jpg", alt: "with main" }],
      },
      {
        section: "동아리 상세",
        images: [
          { src: "/images/WITH/overview3.jpg", alt: "with main" },
          { src: "/images/WITH/overview4.jpg", alt: "with main" },
          { src: "/images/WITH/overview5.jpg", alt: "with main" },
        ],
      },
      {
        section: "동아리 탐색",
        images: [
          { src: "/images/WITH/overview6.jpg", alt: "with search" },
          { src: "/images/WITH/overview7.jpg", alt: "with search" },
        ],
      },
      {
        section: "내 정보",
        images: [{ src: "/images/WITH/overview8.jpg", alt: "with mypage" }],
      },
      {
        section: "flowChart & SiteMap",
        images: [
          { src: "/images/WITH/flowChart.jpg", alt: "flowchart" },
          { src: "/images/WITH/siteMap.jpg", alt: "siteMap" },
        ],
      },
    ],
  },
];
