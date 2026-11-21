import type { PortfolioProps } from "../types";
import captures from "./ctfCaptures.json";

const tools: PortfolioProps["tools"] = [
    { src: "/logo/NextJs.svg", alt: "Next.js" },
    { src: "/logo/react.png", alt: "React" },
    { src: "/logo/typescript.png", alt: "TypeScript" },
    { src: "/logo/tailwind.png", alt: "Tailwind CSS" },
];

interface CtfEvent {
    id: keyof typeof captures;
    title: string;
    intro: string;
    features: PortfolioProps["features"];
    rnr: string[];
}

function createEvent(event: CtfEvent): PortfolioProps {
    const image = captures[event.id].main;
    return {
        id: event.id,
        title: event.title,
        intro: event.intro,
        category: "Work Experience",
        type: "Web",
        image,
        thumbnail: image,
        link: "",
        github: "",
        previewNote:
            "제공된 프로젝트 소스를 로컬에서 실행해 캡처한 화면입니다. 팀·점수·문제·유형별 색상·진행 상태는 예시 데이터입니다.",
        overviewImages: [
            {
                section: "메인",
                images: [{ src: image, alt: `${event.title} 메인 화면` }],
            },
            {
                section: event.id === "apcert" ? "챌린지 · 훈련 과제" : "챌린지",
                images: [
                    {
                        src: captures[event.id].challenges,
                        alt: `${event.title} 챌린지 화면`,
                    },
                ],
            },
            {
                section: event.id === "apcert" ? "스코어보드 · 훈련 진행 현황" : "스코어보드",
                images: [
                    {
                        src: captures[event.id].scoreboard,
                        alt: `${event.title} 스코어보드 화면`,
                    },
                ],
            },
        ],
        features: event.features,
        tools,
        rnr: event.rnr,
    };
}

// One entry per competition. Division and qualification/final variants stay together.
// Introductions checked against event announcements on 2026-11-20.
export const ctfEvents: PortfolioProps[] = [
    // https://eiec.kdi.re.kr/policy/materialView.do?num=284664
    createEvent({
        id: "codegate",
        title: "CODEGATE 2026",
        intro: "과학기술정보통신부가 주최하는 국제 해킹방어대회",

        features: [
            {
                title: "대회 랜딩",
                description: "행사 일정·장소를 소개하고 문제 목록과 순위표로 안내합니다.",
            },
            {
                title: "문제별 순위표",
                description: "팀 순위와 문제 해결 현황, 최초 해결 기록을 함께 보여줍니다.",
            },
            {
                title: "참가자 탐색",
                description: "문제·팀·사용자 화면을 공통 내비게이션으로 연결합니다.",
            },
        ],
        rnr: ["대회 시각 요소를 적용한 랜딩 및 공통 화면 구성", "문제별 스코어보드 UI와 API 연동"],
    }),
    // https://cce.cstec.kr/
    createEvent({
        id: "cce",
        title: "CCE 2026",
        intro: "국가정보원 주최·국가보안기술연구소 주관의 사이버공격방어대회",

        features: [
            { title: "대회 안내", description: "대회 소개, 운영 규정과 문의 정보를 제공합니다." },
            {
                title: "통합·부문별 순위",
                description: "전체 순위와 일반·공공·청소년 부문의 결과를 구분해 보여줍니다.",
            },
            {
                title: "운영용 점수 화면",
                description: "전체 화면 순위표로 대회 현황을 확인할 수 있습니다.",
            },
        ],
        rnr: ["대회 소개 및 운영 정보 화면 구성", "통합·부문별 순위표와 운영용 화면 구현"],
    }),
    // https://www.hacktheon.org/y2026/
    createEvent({
        id: "hacktheon",
        title: "HACKTHEON SEJONG 2026",
        intro: "세종특별자치시·국가정보원이 주최하는 국제 대학생 사이버보안 경진대회",

        features: [
            { title: "대회 소개", description: "행사 정보와 참여 대상, 주요 일정을 안내합니다." },
            {
                title: "참가 흐름",
                description: "로그인부터 문제 탐색과 팀 정보 확인까지 연결합니다.",
            },
            {
                title: "문제별 순위",
                description: "팀 점수와 문제 해결 상태를 매트릭스로 보여줍니다.",
            },
        ],
        rnr: ["대회 브랜드에 맞춘 소개·참가 화면 구성", "스코어보드 및 참가자 화면의 API 연동"],
    }),
    // https://www.kisa.or.kr/401/form?lang_type=KO&page=2&postSeq=3792
    createEvent({
        id: "acdc",
        title: "ACDC 2026",
        intro: "한국인터넷진흥원·한국정보보호산업협회가 공동 주관하는 AI 해킹방어대회",

        features: [
            {
                title: "대회 안내·카운트다운",
                description: "예선·본선 일정과 대회 진행 시간을 안내합니다.",
            },
            {
                title: "문제별 해결 현황",
                description: "팀 점수와 문제별 해결·최초 해결 상태를 함께 보여줍니다.",
            },
            {
                title: "전체 화면 순위표",
                description: "운영 화면에서 팀 순위와 대회 현황을 크게 확인합니다.",
            },
        ],
        rnr: ["대회 랜딩 및 공통 UI 구성", "문제별 점수표·순위 화면과 API 연동"],
    }),
    // https://aeroflight.yu.ac.kr/main/life/guidance-on-extracurricular-events.do?articleNo=232105615&mode=view
    createEvent({
        id: "uhcon",
        title: "UHCON 2026",
        intro: "울산정보보호지원센터가 주관하는 영남권 보안 인재 대상 울산 모의해킹 대회",

        features: [
            {
                title: "대회 랜딩",
                description: "대회 시각 요소와 주최·주관 정보를 한 화면에 담았습니다.",
            },
            {
                title: "문제 탐색",
                description: "문제 유형과 해결 상태로 필터링하고 배점·풀이 수를 확인합니다.",
            },
            {
                title: "팀·순위 확인",
                description: "문제 목록에서 팀 정보와 스코어보드로 이동합니다.",
            },
        ],
        rnr: ["대회 랜딩과 문제 카드 UI 구성", "문제 필터·참가자 화면 및 API 연동"],
    }),
    // https://www.fsec.or.kr/bbs/detail?bbsNo=12033&menuNo=69
    createEvent({
        id: "fiesta",
        title: "FIESTA 2026",
        intro: "금융보안원이 주최·주관하는 금융권 AI 활용 해킹방어대회",

        features: [
            {
                title: "대회 랜딩",
                description: "금융보안 대회의 시각 요소와 주요 메뉴를 제공합니다.",
            },
            {
                title: "통합 점수표",
                description: "팀 점수와 문제별 해결 현황, 최초 해결 기록을 보여줍니다.",
            },
            {
                title: "진행 현황",
                description: "남은 시간과 자동 갱신되는 순위표를 함께 확인합니다.",
            },
        ],
        rnr: ["대회 콘셉트에 맞춘 랜딩과 공통 UI 구성", "문제별 점수표·진행 현황의 API 연동"],
    }),
    // https://fis.kr/ko/notification/press_release?articleSeq=5100
    createEvent({
        id: "fis",
        title: "FIS 2026",
        intro: "한국재정정보원이 주관하는 기획재정부문 사이버보안 경진대회",

        features: [
            {
                title: "행사 안내",
                description: "대회 일정·장소와 참가 화면으로의 진입을 안내합니다.",
            },
            { title: "문제 분류·필터", description: "카테고리와 해결 여부로 문제를 탐색합니다." },
            {
                title: "참가자 작업 화면",
                description: "진행도·점수·남은 시간을 확인하며 문제를 풉니다.",
            },
        ],
        rnr: ["대회 안내와 참가자 작업 화면 구성", "문제 필터·진행 상태 및 API 연동"],
    }),
    // https://uipa.or.kr/webuser/usc_notice/view.html?bd_id=24201
    createEvent({
        id: "sector",
        title: "SECTOR 2026",
        intro: "경상남도 주최·경남테크노파크 주관의 동남권 대학(원)생 대상 정보보호 사이버공방전",

        features: [
            { title: "대회 안내", description: "대회 일정·장소와 경기 방식을 안내합니다." },
            {
                title: "문제·방어 과제",
                description: "문제 탐색과 방어 과제 화면을 대회 흐름에 맞춰 연결합니다.",
            },
            { title: "팀 순위", description: "팀 순위와 문제별 해결 현황을 확인합니다." },
        ],
        rnr: ["대회 랜딩 및 참가 화면 구성", "문제·스코어보드 화면의 API 연동"],
    }),
    // https://www.kisa.or.kr/402/form?page=1&postSeq=2629
    createEvent({
        id: "apcert",
        title: "APCERT Cyber Drill 2026",
        intro: "한국인터넷진흥원과 APCERT가 함께 실시하는 아시아·태평양 지역 침해사고 대응 모의훈련",

        features: [
            {
                title: "훈련 진행 대시보드",
                description: "팀별 상황 과제의 완료 상태를 표로 확인하고 관리합니다.",
            },
            {
                title: "메일·채팅",
                description: "훈련에 필요한 메일과 채팅 화면을 공통 메뉴로 연결합니다.",
            },
            {
                title: "권한별 화면",
                description: "운영자·참가자 역할에 따라 필요한 메뉴와 기능을 제공합니다.",
            },
        ],
        rnr: ["훈련 대시보드와 역할별 공통 화면 구성", "팀별 진행 상태·메일·채팅 화면의 API 연동"],
    }),
];
