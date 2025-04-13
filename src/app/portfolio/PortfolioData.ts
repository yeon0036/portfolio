export type PortfolioCategory = "FE" | "DESIGN";

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
    category: "FE",
  },
  {
    id: "Rolling",
    title: "Rolling",
    image: "/images/Rolling/Rolling.svg",
    category: "FE",
  },
  {
    id: "Whyne",
    title: "WHYNE",
    image: "/images/WHYNE/WHYNE.svg",
    category: "FE",
  },
  {
    id: "WITH",
    title: "WITH",
    image: "/images/WITH/WITH.png",
    category: "DESIGN",
  },
];
