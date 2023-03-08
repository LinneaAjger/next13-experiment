import './globals.css'
import Link from 'next/link'
import Image from "next/image";
import { IBM_Plex_Sans, Creepster } from '@next/font/google'


const creepster = Creepster({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-creepster"
})
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  variable: "--font-ibmPlexSans"
})

export default function RootLayout({ children }) {

return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={ibmPlexSans.className}>
      {/* <Image 
        src="/background-cinema.jpg"
        width={1000}
        height={500}
        className='nextimg'
        alt="cinema with people" />         */}
        <Link href="/">
        <h1 className={creepster.className}>Movie Time</h1>
        </Link>
        <ul className="first-nav">
          <li><a href="/about">About</a></li>
          <li><a href="/login">Sign in</a></li>
        </ul>

        {children}
        
      </body>
    </html>
  )
}
