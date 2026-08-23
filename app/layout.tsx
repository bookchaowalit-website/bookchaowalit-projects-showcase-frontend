import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projects Showcase | Bookchaowalit",
  description: "A quiet, honest index of projects from the Book Dev boundary.",
  keywords: ['projects showcase', 'Book Dev', 'MCP', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Bookchaowalit', url: 'https://bookchaowalit.com' }],
  creator: 'Bookchaowalit',
  publisher: 'Bookchaowalit',
  metadataBase: new URL('https://bookchaowalit.com'),
  alternates: {
    canonical: 'https://bookchaowalit.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bookchaowalit.com',
    title: 'Projects Showcase | Bookchaowalit',
    description: 'A quiet, honest index of projects from the Book Dev boundary.',
    siteName: 'Bookchaowalit',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bookchaowalit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookchaowalit - Bookchaowalit',
    description: 'Bookchaowalit by Bookchaowalit - A modern web application built with Next.js',
    images: ['/og-image.png'],
    creator: '@bookchaowalit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* THESIS: project records become an open ikebana arrangement, refusing a dense directory. OWN-WORLD: plaster, pine, iris, bronze, open space, stems, and quiet editorial labels. STORY: enter the arrangement, select a study, search the archive, and use the read-only catalog handle. FIRST VIEWPORT: a quiet hero and public arrangement note lead into the open vessel and selected study. FORM: preserved ikebana world, candidate 3 of 7, seed b55e92bb. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

// SEO TODO: Add Open Graph tags for social sharing
