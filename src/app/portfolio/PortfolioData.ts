export type PortfolioCategory = "JavaScript" | "TypeScript";

export interface PortfolioProps {
  id: string;
  title: string;
  image: string;
  category: PortfolioCategory;
}

export const portfolioItems: PortfolioProps[] = [
  {
    id: "GlobalNomad",
    title: "GlobalNomad",
    image: "/images/GlobalNomad/GlobalNomad.svg",
    category: "TypeScript",
  },
  {
    id: "Rolling",
    title: "Rolling",
    image: "/images/Rolling/Rolling.svg",
    category: "JavaScript",
  },
  {
    id: "Whyne",
    title: "WHYNE",
    image: "/images/WHYNE/WHYNE.svg",
    category: "TypeScript",
  },
];
