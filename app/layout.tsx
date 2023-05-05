import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Hannah's Blog",
  description: 'Created by create Hannah Naderi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark: bg-slate-800">
        <Navbar/>
        <ProfilePic/>
        {children}
      </body>
    </html>
  )
}
