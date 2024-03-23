import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

import StoreProvider from "@/providers/StoreProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Discord clone",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <StoreProvider>
                <body className="dark">
                    {children}
                    <Toaster richColors />
                </body>
            </StoreProvider>
        </html>
    );
}
