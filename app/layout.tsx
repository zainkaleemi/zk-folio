import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald, JetBrains_Mono } from 'next/font/google'
import { Cursor } from '@/components/cursor'
import { LightboxProvider } from '@/components/lightbox'
import { ScrollProgress } from '@/components/scroll-progress'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-jb',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zain Kaleemi — Engineering Portfolio',
  description:
    'Mechanical engineering shaped by robotics, precise mechanisms, and the discipline of making physical systems work. CAD, FEA, prototyping, and competition engineering.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141414',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${jetBrainsMono.variable} bg-background`}
    >
      <body className="antialiased">
        <ScrollProgress />
        <Cursor />
        <LightboxProvider>{children}</LightboxProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
