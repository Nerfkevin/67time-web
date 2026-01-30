import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans", display: "swap" });

export const metadata: Metadata = {
  title: "67Time",
  description: "67Time App",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://67time.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.variable} ${publicSans.className} min-h-screen bg-white antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
