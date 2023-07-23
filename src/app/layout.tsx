import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBarWithHeader from "@/components/layout/SideBarWithHeader";

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
      <body className={'bg-slate-900 text-white ' + inter.className}>
        <SideBarWithHeader />
        <main className="lg:pl-72 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
