import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Everyone Games',
  description: 'A video-game aggregator application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'bg-gray-800 text-white ' + inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
