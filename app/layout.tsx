import './globals.css'
import { Inter } from 'next/font/google'
import SessionProvider from '@/components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://solarautopilot.com'),
  title: 'SolarAutopilot - Intelligent Solar Energy Management, Powered by AI',
  description: 'Optimize your solar system with academic-backed AI that learns your patterns and saves you money. Up to 12.7% cost reduction compared to traditional systems.',
  keywords: 'solar energy, AI optimization, battery management, cost savings, open source',
  authors: [{ name: 'SolarAutopilot Team' }],
  openGraph: {
    title: 'SolarAutopilot - AI-Powered Solar Energy Management',
    description: 'Save up to 12.7% on electricity costs with AI that learns your patterns. Free, open source, and privacy-first.',
    url: 'https://solarautopilot.com',
    siteName: 'SolarAutopilot',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolarAutopilot - AI-Powered Solar Energy Management',
    description: 'Save up to 12.7% on electricity costs with AI that learns your patterns.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-text-primary antialiased`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}