import type { DesignProps } from "../types";

export default {
    id: "with",
    title: "With",
    category: "Team Project",
    image: "/images/WITH/WITH.png",
    intro: "동아리 탐색부터 일정·소통까지 모은 동아리 관리 앱 UI/UX",
    link: "https://xd.adobe.com/view/d10f6bd5-2d5e-4457-915b-1ee6b0f4065c-845c/?fullscreen",
    thumbnail: "/images/WITH/withTN.jpg",
    details: {
        functions: [
            {
                title: "동아리 둘러보기",
                desc: "재학 중인 대학교의 동아리를 탐색하고 정보를 확인합니다.",
            },
            {
                title: "메시지·채팅",
                desc: "원하는 상대에게 메시지를 보내고 동아리 채팅에 참여합니다.",
            },
            {
                title: "내 정보",
                desc: "마이페이지에서 내 정보를 확인합니다.",
            },
            {
                title: "내 동아리",
                desc: "가입한 동아리의 일정과 커뮤니티를 확인합니다.",
            },
        ],
        tools: [
            {
                src: "/logo/xd.png",
                alt: "Adobe XD",
            },
        ],
        rnr: ["메인·동아리 탐색·검색 화면 디자인", "마이페이지 일부 디자인"],
        build: {
            motivation: [
                "여러 앱에 흩어진 동아리 일정·문서·소통 기능 통합",
                "동아리 모집 공고와 상세 정보를 한곳에서 제공",
                "채팅방마다 반복하는 공지 전달 과정 개선",
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
                {
                    src: "/images/WITH/overview1.jpg",
                    alt: "with login/signup",
                },
            ],
        },
        {
            section: "메인페이지",
            images: [
                {
                    src: "/images/WITH/overview2.jpg",
                    alt: "with main",
                },
            ],
        },
        {
            section: "동아리 상세",
            images: [
                {
                    src: "/images/WITH/overview3.jpg",
                    alt: "with main",
                },
                {
                    src: "/images/WITH/overview4.jpg",
                    alt: "with main",
                },
                {
                    src: "/images/WITH/overview5.jpg",
                    alt: "with main",
                },
            ],
        },
        {
            section: "동아리 탐색",
            images: [
                {
                    src: "/images/WITH/overview6.jpg",
                    alt: "with search",
                },
                {
                    src: "/images/WITH/overview7.jpg",
                    alt: "with search",
                },
            ],
        },
        {
            section: "내 정보",
            images: [
                {
                    src: "/images/WITH/overview8.jpg",
                    alt: "with mypage",
                },
            ],
        },
        {
            section: "flowChart & SiteMap",
            images: [
                {
                    src: "/images/WITH/flowChart.jpg",
                    alt: "flowchart",
                },
                {
                    src: "/images/WITH/siteMap.jpg",
                    alt: "siteMap",
                },
            ],
        },
    ],
} satisfies DesignProps;
