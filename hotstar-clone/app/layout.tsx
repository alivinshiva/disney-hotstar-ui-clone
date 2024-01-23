import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
// import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Disney+ Hotstar Clone',
  description: 'Developed as project, with love by Alivin Shiva(Shivam Kumar)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white dark:bg-[#1A1C29]'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
