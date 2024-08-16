import type { Metadata } from "next";
// import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "E2A Conference",
    // metadataBase: new URL("https://docstemplate.vercel.app/"),
    description:
          "The International Conference on Electrical, Electronics, and Automation (E2A) serves as a global hub where experts gather to explore, collaborate, and share groundbreaking research and innovations in the rapidly evolving fields of electrical engineering, electronics, and automation. E2A provides a vital platform for diverse professionals to exchange ideas and knowledge, fostering innovation and shaping a future powered by cutting-edge technologies. Join us at E2A to be part of this transformative journey towards a smarter, more connected, and automated world, where your contributions are essential in shaping the future. Selected papers will be published in SCOPUS indexed proceedings",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body
                className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
                // suppressHydrationWarning
            >
                <Navbar />
                <main className="sm:container mx-auto w-[85vw] h-auto">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
