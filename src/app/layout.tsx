import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prerna Singh — Frontend Developer",
  description:
    "Frontend-focused developer skilled in React, Next.js, and modern UI systems. I build responsive, scalable web applications with strong attention to user experience and performance.",
  keywords: ["Frontend Developer", "React", "Next.js", "Web Developer", "Portfolio", "Prerna Singh"],
  authors: [{ name: "Prerna Singh" }],
  openGraph: {
    title: "Prerna Singh — Frontend Developer",
    description:
      "Frontend-focused developer skilled in React, Next.js, and modern UI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
