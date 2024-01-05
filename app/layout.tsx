import "@/app/globals.css";

import type { Metadata } from "next";
import { Sora } from "next/font/google";

import Footer from "./(components)/(footer)";
import Header from "./(components)/(header)";

const sora = Sora({
    subsets: ["latin"],
    weight: ["200", "400", "600", "700"],
});

/**
 * TODO: add more metadata
 *
 */
export const metadata: Metadata = {
    title: "Abdellatif Dev",
    description: "Empower Your Digital Success",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={sora.className}>
                <div id="grainy">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
