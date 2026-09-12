import { ThemeProvider } from './components/ThemeProvider';
import { Syne, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Tigran Avanesyan — Fullstack Frontend Developer",
    template: "%s | Tigran Avanesyan"
  },
  description: "Fullstack frontend developer who designs and ships web products end to end — from interface to API and deploy.",
  keywords: [
    "fullstack developer",
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "portfolio",
    "Tigran Avanesyan",
    "software engineer"
  ],
  authors: [{ name: "Tigran Avanesyan" }],
  creator: "Tigran Avanesyan",
  publisher: "Tigran Avanesyan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Tigran Avanesyan — Fullstack Frontend Developer",
    description: "I design and ship web products end to end — frontend craft with enough backend to take a product live.",
    siteName: "Tigran Avanesyan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tigran Avanesyan — Fullstack Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tigran Avanesyan — Fullstack Frontend Developer",
    description: "I design and ship web products end to end.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${syne.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
