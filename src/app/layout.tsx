import { type Metadata } from 'next'
import Script from 'next/script'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://webdesignbystein.de'),
  title: {
    default: 'Lucas-Maurice Stein – Webentwickler aus Calw',
    template: '%s · Lucas-Maurice Stein',
  },
  description:
    'Moderner Webauftritt mit Next.js & Tailwind – Projekte, Leistungen und Artikel von Lucas-Maurice Stein.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://webdesignbystein.de/',
    siteName: 'Lucas-Maurice Stein',
    title: 'Lucas-Maurice Stein – Webentwickler aus Calw',
    description:
      'Projekte, Leistungen und Artikel – gebaut mit Next.js & Tailwind.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Lucas-Maurice Stein – Webentwickler aus Calw',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lucasballout',
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-white dark:focus:bg-zinc-100 dark:focus:text-zinc-900"
        >
          Zum Inhalt springen
        </a>

        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}