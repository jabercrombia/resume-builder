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
        url: '/resume-builder-thumb.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/resume-builder-thumb.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
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
