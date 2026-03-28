import { ThemeProvider } from './components/ThemeProvider';
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Tigran Avanesyan — Fullstack Frontend Developer",
    template: "%s | Tigran Avanesyan"
  },
  description: "Fullstack frontend developer building scalable web applications with a focus on user experience, performance, and clean interfaces.",
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
    description: "Fullstack frontend developer building scalable web applications with a focus on user experience and performance.",
    siteName: "Tigran Avanesyan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tigran Avanesyan — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tigran Avanesyan — Fullstack Frontend Developer",
    description: "Fullstack frontend developer building scalable web applications.",
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
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
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
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
