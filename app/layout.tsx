import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import CalendarButton from '@/components/CalendarButton'
import WhatsAppButton from '@/components/WhatsAppButton'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prosci KPINTAR | Change Management Excellence',
  description: 'Prosci Approved Partner - KPINTAR enhancing capability. Drive successful change in your organization with proven change management methodology.',
  generator: 'v0.app',
  icons: {
    icon: '/PROSCI MALAYSIA FAVICON.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <CalendarButton />
        <WhatsAppButton />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DCJ534TDBQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DCJ534TDBQ');
          `}
        </Script>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
