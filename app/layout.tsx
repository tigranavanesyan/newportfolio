import { ThemeProvider } from './components/ThemeProvider';
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Fullstack Frontend Developer",
    template: "%s | Portfolio"
  },
  description: "I'm a passionate fullstack frontend developer with expertise in building scalable web applications. I specialize in creating intuitive user interfaces and robust backend systems.",
  keywords: [
    "fullstack developer",
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "portfolio",
    "software engineer"
  ],
  authors: [{ name: "Portfolio Developer" }],
  creator: "Portfolio Developer",
  publisher: "Portfolio Developer",
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
    title: "Portfolio - Fullstack Frontend Developer",
    description: "I'm a passionate fullstack frontend developer with expertise in building scalable web applications. I specialize in creating intuitive user interfaces and robust backend systems.",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio - Fullstack Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Fullstack Frontend Developer",
    description: "I'm a passionate fullstack frontend developer with expertise in building scalable web applications.",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
