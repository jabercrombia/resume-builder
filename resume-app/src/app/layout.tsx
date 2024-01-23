import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://resume-app-flame.vercel.app/'),
  title: 'Resume Builder',
  description: 'A Resume builder built on the NextJS Framework',
  openGraph: {
    title: 'Resume Builder',
    description: 'A Resume builder built on the NextJS Framework',
    url: 'https://resume-app-flame.vercel.app/',
    siteName: 'Resume Builder',
    images: [
      {
        url: '/resume-builder-thumb.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/resume-builder-thumb.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['/resume-builder-thumb.png'], // Must be an absolute URL
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
