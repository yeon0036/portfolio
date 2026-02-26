import type { Metadata } from "next";
import "@/styles/global.css";
import Footer from "@/components/Footer/Footer";
import QueryProvider from "@/lib/QueryProvider";
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
                <QueryProvider>
                    {/* <AppXY /> */}
                    <main>{children}</main>
                    <footer>
                        <Footer />
                    </footer>
                </QueryProvider>
            </body>
        </html>
    );
}
