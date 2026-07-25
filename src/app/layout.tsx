import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-ahmad-khan.vercel.app"),
  title: "Muhammad Ahmad Khan — Full-Stack Developer & CS Student",
  description: "Computer Science student building AI-powered full-stack web tools. View live projects and get in touch.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Muhammad Ahmad Khan — Full-Stack Developer & CS Student",
    description: "Computer Science student building AI-powered full-stack web tools. View live projects and get in touch.",
    url: "https://muhammad-ahmad-khan.vercel.app", // standard portfolio url fallback
    siteName: "Muhammad Ahmad Khan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ahmad Khan — Full-Stack Developer & CS Student Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ahmad Khan — Full-Stack Developer & CS Student",
    description: "Computer Science student building AI-powered full-stack web tools. View live projects and get in touch.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-[#f8fafc] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
