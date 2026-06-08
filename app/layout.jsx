import '../public/css/colors_and_type.css'
import '../public/css/styles.css'
import '../public/css/story.css'
import Script from 'next/script'
import { structuredData } from '@/lib/structured-data'

export const metadata = {
  metadataBase: new URL('https://sonokembang.id'),
  title: {
    default: 'Sonokembang Catering — Sejak 1987',
    template: '%s | Sonokembang Catering',
  },
  description:
    'Sonokembang Catering melayani pernikahan, syukuran, khitanan, dan acara keluarga di 6 kota: Surabaya, Malang, Jakarta, Semarang, Banjarmasin. Berdiri sejak 1987.',
  keywords: [
    'catering surabaya',
    'catering pernikahan',
    'catering malang',
    'catering jakarta',
    'sonokembang',
    'catering syukuran',
    'catering khitanan',
    'nasi box surabaya',
    'prasmanan pernikahan',
    'catering jawa timur',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://sonokembang.id',
    siteName: 'Sonokembang Catering',
    title: 'Sonokembang Catering — Sejak 1987',
    description:
      'Warisan rasa Ibu Sri Harjoeni — dari kanteen kecil di Surabaya kini melayani enam kota.',
    images: [{ url: '/assets/hero-wedding-spread.jpg', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://sonokembang.id',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
