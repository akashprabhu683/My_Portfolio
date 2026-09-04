import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolioData, siteUrl } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${portfolioData.name} | ${portfolioData.professionalTitle}`,
    template: `%s | ${portfolioData.name}`,
  },
  description: `${portfolioData.name} is a Frontend Developer and UI Engineer building clean, responsive web applications with React, TypeScript, Next.js, and Node.js. Experienced in developing privacy-focused software, scalable interfaces, and hackathon prototypes.`,
  applicationName: `${portfolioData.name} Portfolio`,
  authors: [{ name: portfolioData.name, url: portfolioData.contact.github }],
  generator: "Next.js",
  creator: portfolioData.name,
  publisher: portfolioData.name,
  keywords: [
    "Akash Prabhu",
    "Frontend Developer",
    "UI Engineer",
    "Web Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Privacy Leak Detector",
    "DeFi Hackathon",
    "Portfolio",
    "Computer Science Engineering",
    "Chennai",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: `${portfolioData.name} | ${portfolioData.professionalTitle}`,
    description: `${portfolioData.name} is a Frontend Developer and UI Engineer building clean, responsive web applications with React, TypeScript, Next.js, and Node.js.`,
    url: "/",
    siteName: `${portfolioData.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: `${portfolioData.name} — ${portfolioData.professionalTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} | ${portfolioData.professionalTitle}`,
    description: `${portfolioData.name} is a Frontend Developer and UI Engineer building clean, responsive web applications with React, TypeScript, Next.js, and Node.js.`,
    images: ["/og/og-image.png"],
    creator: "@akashprabhu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
