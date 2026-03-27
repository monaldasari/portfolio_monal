import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Monal Dasari - Web Developer Intern',
  description: 'Personal portfolio of Monal Dasari, Web Developer Intern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} cursor-none`}>
        <div className="cursor-glow"></div>
        {children}
      </body>
    </html>
  )
}