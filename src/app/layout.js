import Nav from '@/components/NavComponent/Nav'
import './globals.css'
import Footer from '@/components/FooterComponent/Footer'
import Script from 'next/script'
import Link from 'next/link';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elite Fitness Gym',
  description: 'Experience elite training and world-class gym facilities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"gym-body"}>
        <Nav /> 
        <main style={{minHeight: "80vh"}}> 
          {children}          
        </main>
        <Footer /> 
      </body>
    </html>
  )
}
