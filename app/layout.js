"use client"

import './globals.css'
import Link from 'next/link'
import { IBM_Plex_Sans, Creepster } from '@next/font/google'
import { useRouter } from 'next/router'


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
      <nav>
        <h1 className={creepster.className}>Movie Time</h1>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="#">Sign in</a></li>
        </ul>
      </nav>
      <ul>
        <li>
          <Link href="/popular" >
          <h2>Popular Movies</h2>
          </Link>
        </li>
        <li>
          <Link href="/top-rated" >
        <h2>Top Rated</h2>
          </Link>
        </li>
        <li>
          <Link href="/upcoming" >
        <h2>Upcoming</h2>
          </Link>
        </li>
        </ul>
        {children}</body>
    </html>
  )
}
