import '../globals.css'
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
    <section>
        <ul>        
          {links.map ( (l, i) => 
          <li key={i} className="second-nav">
            <NavLink key={i} {...l} />
          </li>
        )}
        </ul>
        {children}
      </section>
      )
}
