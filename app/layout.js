import './globals.css'
import { IBM_Plex_Sans } from '@next/font/google'
import { Creepster } from '@next/font/google'

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
      <body className={`${ibmPlexSans.className} mx-32 my-12 text-white bg-gradient-to-r from-black to-indigo-900`}>
      <nav>
        <h1 className={`${creepster.className} text-7xl text-center tracking-wider Luckiest_Guy`}>Movie Time</h1>
        <ul className={"text-lg text-right my-4"}>
          <li className={"inline-block"}><a href="/about">About</a></li>
          <li className={"inline-block mx-2"}><a href="#">Sign in</a></li>
        </ul>
      </nav>
        {children}</body>
    </html>
  )
}
