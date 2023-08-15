import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Lloyd's Travel Blog",
  description: "A list of countries visited in 2023",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="prose lg:prose-xl">
        <Header />
        {children}
        </body>
    </html>
  )
}
