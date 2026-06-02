import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prerna Singh — Frontend Developer | React & Next.js",
  description:
    "Frontend developer specializing in React, Next.js, and TypeScript. I build responsive, high-performance web applications with clean architecture and exceptional user experiences. Open to internships and frontend opportunities.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Prerna Singh",
    "Full Stack",
    "UI Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Prerna Singh" }],
  openGraph: {
    title: "Prerna Singh — Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, and TypeScript. Building modern, scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prerna Singh — Frontend Developer",
    description: "Building modern, scalable web applications with React & Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GTEV3QSB6Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GTEV3QSB6Y');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
