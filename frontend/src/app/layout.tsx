import type { Metadata } from "next";
import "@/styles/global.css";
import EffectsBackground from "@/components/ReactBits/EffectsBackground";
import Footer from "@/components/Footer/Footer";
//import AppXY from "@/components/mousepointer/AppXY";

export const metadata: Metadata = {
    title: "정혜연 | Frontend Developer",
    description: "정혜연의 프론트앤드 포트폴리오입니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <EffectsBackground />
                {/* <AppXY /> */}
                <main className="site-content">{children}</main>
                <footer className="site-content">
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
