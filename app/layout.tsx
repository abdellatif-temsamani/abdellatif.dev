import "@/app/globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Viewport } from "next";
import type { Metadata } from "next";
import { Sora } from "next/font/google";

import Footer from "./(components)/(footer)";
import Header from "./(components)/(header)";

const sora = Sora({
    subsets: ["latin"],
    weight: ["200", "400", "600", "700"],
});

export const viewport: Viewport = {
    themeColor: "#e0f2fe",
    colorScheme: "only light",
};

export const metadata: Metadata = {
    title: "Abdellatif Dev",
    description: "Empower Your Digital Success",
    applicationName: "Abdellatif Dev",
    openGraph: {
        type: "website",
        title: "Abdellatif Dev",
        description: "Empower Your Digital Success",
        url: new URL("https://www.abdellatif.dev/"),
    },
    twitter: {
        card: "app",
        site: "https://www.abdellatif.dev/",
        creator: "abdellatif_dev"
    },
    metadataBase: new URL("https://www.abdellatif.dev/"),
    keywords: [
        "Abdellatif Dev",
        "passionate",
        "turning",
        "visions",
        "reality",
        "cutting-edge",
        "software solutions",
        "leading",
        "development",
        "consulting agency",
        "dedicated",
        "empowering",
        "businesses",
        "innovative technology",
        "digital transformation",
        "team",
        "highly skilled",
        "experienced professionals",
        "tailor-made solutions",
        "drive growth",
        "efficiency",
        "Web Development",
        "Mobile Application Development",
        "Custom Software Solutions",
    ],
    publisher: "Abdellatif Mkaref Temsamani",
    category: "consulting, web development, mobile applications",
    icons: {
        icon: "/images/icons/ad.svg",
        shortcut: "/images/icons/ad.svg",
        apple: "/images/icons/ad.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={sora.className}>
                <SpeedInsights />
                <div id="grainy">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
