export type PortfolioCategory = "JavaScript" | "TypeScript" | "Design";

export interface PortfolioProps {
  id: string;
  title: string;
  image: string;
  intro: string;
  category: PortfolioCategory;
}

export const portfolioItems: PortfolioProps[] = [
  {
    id: "GlobalNomad",
    title: "GlobalNomad",
    image: "/images/GlobalNomad/GlobalNomad.svg",
    intro: "취미활동 참여 및 주최 플랫폼",
    category: "TypeScript",
  },
  {
    id: "Rolling",
    title: "Rolling",
    image: "/images/Rolling/Rolling.svg",
    intro: "익명/비익명 메세지 전달 플랫폼",
    category: "JavaScript",
  },
  {
    id: "WHYNE",
    title: "WHYNE",
    image: "/images/WHYNE/WHYNE.svg",
    intro: "와인 관련 정보공유 커뮤니티",
    category: "TypeScript",
  },
  {
    id: "With",
    title: "WITH",
    image: "/images/WITH/with.png",
    intro: "동아리 활동 총 관리 앱",
    category: "Design",
  },
];
