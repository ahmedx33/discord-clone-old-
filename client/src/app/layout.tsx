import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

import StoreProvider from "@/components/providers/store-provider";
import { Toaster } from "sonner";

const font = Open_Sans({ subsets: ["latin"] });

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
