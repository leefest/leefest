import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LeeFest — The Back Garden Festival (2006-2015) | Founded by Lee Denny',
  description: 'LeeFest started in a 16-year-old\'s back garden in Beckenham and grew into an award-winning independent festival. 100% volunteer-run, it launched careers of Bastille, London Grammar, Years & Years and more.',
  keywords: ['LeeFest', 'LeeFest festival', 'Lee Denny festival', 'Bromley music festival', 'Beckenham festival', 'Back garden festival UK', 'UK independent festival', 'Volunteer-run festival UK', 'Android LeeFest advert'],
  authors: [{ name: 'Lee Denny', url: 'https://leedenny.com' }],
  openGraph: {
    title: 'LeeFest — The Back Garden Festival (2006-2015)',
    description: 'LeeFest started in a 16-year-old\'s back garden in Beckenham and grew into an award-winning independent festival. 100% volunteer-run, it launched careers of Bastille, London Grammar, Years & Years and more.',
    url: 'https://leefest.com',
    siteName: 'LeeFest',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LeeFest Festival',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeeFest — The Back Garden Festival (2006-2015)',
    description: 'LeeFest started in a 16-year-old\'s back garden in Beckenham and grew into an award-winning independent festival.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://leefest.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicEvent',
              name: 'LeeFest',
              description: 'A back garden festival that became something bigger. 2006–2015.',
              startDate: '2006-08-31',
              endDate: '2015',
              location: {
                '@type': 'Place',
                name: 'Highams Hill Farm',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Beckenham',
                  addressRegion: 'London',
                  addressCountry: 'GB',
                },
              },
              organizer: {
                '@type': 'Person',
                name: 'Lee Denny',
                url: 'https://leedenny.com',
              },
              award: [
                'Best Grassroots Festival — UK Festival Awards 2009',
                'Best Independent Festival — AIM Independent Music Awards 2012',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LeeFest',
              description: 'A back garden festival that became something bigger. 2006–2015.',
              foundingDate: '2006',
              founder: {
                '@type': 'Person',
                name: 'Lee Denny',
                url: 'https://leedenny.com',
              },
              url: 'https://leefest.com',
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
