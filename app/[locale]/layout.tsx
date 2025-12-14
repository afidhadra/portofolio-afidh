import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getMessages } from "next-intl/server";
import { getTranslationsWithFallback } from "@/lib/utils";
import ThemeWrapper from "@/app/components/ThemeWrapper";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const t = await getTranslationsWithFallback(locale);

  const title = `${t('hero.name')}'s Portfolio`;
  const description = "Professional portfolio of Afidh Adra, a Full Stack Developer specializing in government web applications, modern web technologies, and user-centered design solutions.";

  return {
    title,
    description,
    keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Government Web Applications", "Portfolio", "Afidh Adra"],
    authors: [{ name: "Afidh Adra" }],
    creator: "Afidh Adra",
    publisher: "Afidh Adra",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://afidh-adra.vercel.app'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'id': '/id',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://afidh-adra.vercel.app',
      siteName: "Afidh Adra's Portfolio",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: "Afidh Adra's Portfolio",
        },
      ],
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
      creator: '@afidhadra',
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
    verification: {
      google: 'your-google-site-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const messages = await getMessages();
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Afidh Adra",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer specializing in government web applications and modern web technologies",
              "url": "https://afidh-adra.vercel.app",
              "sameAs": [
                "https://github.com/afidhadra",
                "https://linkedin.com/in/afidhadra"
              ],
              "knowsAbout": [
                "Full Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Government Web Applications",
                "Web Design",
                "UI/UX Design"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Indonesia"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-gray-900 dark:text-white`}
      >
        <ThemeWrapper locale={locale} messages={messages}>
          <Navbar />
          <main className="pt-16">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
            <Footer locale={locale} />
          </main>
          <ScrollToTop />
        </ThemeWrapper>
      </body>
    </html>
  );
}