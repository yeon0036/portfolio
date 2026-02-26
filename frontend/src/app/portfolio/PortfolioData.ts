import type { PortfolioProps, DesignProps } from "./types";

/**
 * 포트폴리오 데이터는 백엔드 API (GET /api/portfolio/) 에서 불러옵니다.
 * usePortfolio(), usePortfolioItem(id) 훅을 사용하세요.
 */
export const portfolioData: (PortfolioProps | DesignProps)[] = [];
