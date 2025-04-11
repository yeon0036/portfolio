import type { Metadata } from "next";
import "@/styles/global.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "yeon's portfolio",
  description: "정혜연의 프론트앤드 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
