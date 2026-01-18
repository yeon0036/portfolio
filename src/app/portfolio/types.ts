export interface PortfolioProps {
    id: string;
    title: string;
    intro: string;
    image: string;
    type?: "Mobile" | "Web";
    category: string;
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

export interface DesignProps {
    id: string;
    title: string;
    intro: string;
    image: string;
    type?: "Mobile" | "Web";
    category: string;
    link: string;
    overviewImages: {
        section: string;
        images: { src: string; alt: string }[];
    }[];
    details: {
        functions: { title: string; desc: string }[];
        tools: { src: string; alt: string }[];
        rnr: string[];
        build: {
            motivation: string[];
            competitors: {
                name: string;
                info: string[];
            }[];
        };
    };
}
