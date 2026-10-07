import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Cursor } from '@/components/cursor'
import { LightboxProvider } from '@/components/lightbox'
import { ScrollProgress } from '@/components/scroll-progress'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
  variable: '--font-serif-is',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-jb',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zk-folio-ac.vercel.app'),
  title: 'Zain Kaleemi — Mechanical Design & Robotics',
  description:
    'Mechanical engineering portfolio of Zain Kaleemi: Mechanical Head at Team Robocon MJCET, SAE BAJA vehicle design, agricultural quadruped R&D and interactive CAD.',
  openGraph: {
    title: 'Zain Kaleemi — Mechanical Design & Robotics',
    description: 'Robocon, SAE BAJA and R&D work, with interactive 3D CAD models.',
    images: ['/assets/hero/zain-cutout.webp'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0c12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable} bg-background`}
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
