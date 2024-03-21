import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Provider } from "react-redux";
import { store } from "./store/store";
import StoreProvider from "@/providers/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Discord clone",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <StoreProvider>{children}</StoreProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
