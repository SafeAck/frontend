import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SafeAck - API Security Platform",
    description: "Platform to Safely Explore and Hack APIs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Box>{children}</Box>
                </Providers>
            </body>
        </html>
    );
}
