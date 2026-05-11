import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const hankenGrotesk = localFont({
  src: "../../public/font/HankenGrotesk.ttf",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bidhaan",
  description: "Building simple software, usually.",
  openGraph: {
    title: "Bidhaan",
    description: "Building simple software, usually.",
    url: "https://bidhandhakal.com.np",
    type: "website",
    images: [
      {
        url: "https://bidhandhakal.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bidhaan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bidhaan",
    description: "Building simple software, usually.",
    images: ["https://bidhandhakal.com.np/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
