import './globals.css'
import { Oswald } from '@next/font/google'

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oswald"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${oswald.className} mx-32 my-12`}>
      <nav>
        <h1>hey</h1>
        <ul>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
        {children}</body>
    </html>
  )
}
