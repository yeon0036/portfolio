import type { PortfolioProps, DesignProps } from "./types";
import mpz from "./data/mpz";
import bbu from "./data/bbu";
import tetherDrop from "./data/tetherDrop";
import globalNomad from "./data/globalNomad";
import rolling from "./data/rolling";
import whyne from "./data/whyne";
import withProject from "./data/with";
import { ctfEvents } from "./data/ctfEvents";

export type PortfolioItem = PortfolioProps | DesignProps;

// 이미지 경로는 frontend/public 기준이며, 프로젝트 정보는 로컬 파일에서 관리합니다.
export const portfolioData: PortfolioItem[] = [
    ...ctfEvents,
    mpz,
    bbu,
    tetherDrop,
    globalNomad,
    rolling,
    whyne,
    withProject,
];

export function getPortfolioItem(id: string): PortfolioItem | undefined {
    return portfolioData.find((item) => item.id === id);
}
