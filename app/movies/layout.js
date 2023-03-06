import '../globals.css'
import Link from 'next/link'
import NavLink from './NavLink'
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
  const links = [
    {label: 'Popular', path: '/movies/popular', targetSegment: 'popular'}, 
    {label: 'Top-rated', path: '/movies/top-rated', targetSegment: 'top-rated'},
    {label: 'Upcoming', path: '/movies/upcoming', targetSegment: 'upcoming'}
  ]
  
return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={ibmPlexSans.className}>
        <Link href="/">
        <h1 className={creepster.className}>Movie Time</h1>
        </Link>
        <ul className="first-nav">
          <li><a href="/about">About</a></li>
          <li><a href="/login">Sign in</a></li>
        </ul>
        <ul>        
          {links.map ( (l, i) => 
          <li key={i} className="second-nav">
            <NavLink key={i} {...l} />
          </li>
        )}
        </ul>

        {children}
        
      </body>
    </html>
  )
}
