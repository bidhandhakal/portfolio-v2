import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bidhan",
  description: "idk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFDFD]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
