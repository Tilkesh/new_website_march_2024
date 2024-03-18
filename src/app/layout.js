// "use client";
import { Fira_Sans_Extra_Condensed, Inter } from 'next/font/google'
import './globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
export const metadata = {
  title: 'We Create Mobile, Web, Desktop Apps | DexBytes',
  description: 'We Design and Develop both Native & Hybrid Apps, Web & Software Solutions for the USA, UK, Australia, Malaysia, India & gulf countries.',
}
// import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  // useEffect (()=> {
    
  //   if(typeof window !== "undefined"){
  //     require('bootstrap/dist/js/bootstrap')
  //   }
  // }, [])
 
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

