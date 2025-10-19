import { NavLink } from 'react-router-dom'
import logo from '../assets/labicon.png'
const linkClass = ({isActive}) =>
  `px-3 py-1 rounded-md transition-colors ${isActive ? 'bg-accent-100 text-accent-900' : 'hover:bg-accent-50'}`
export default function Header(){
  return (
    <header className="sticky top-0 z-40 bg-paper/80 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Lab icon" className="w-10 h-10 rounded-full shadow-soft" />
            <div>
              <h1 className="hdr text-2xl">Färkkilä Lab</h1>
              <p className="text-xs text-paper-faded -mt-1">Systems Oncology • HGSC</p>
            </div>
          </div>
          <nav className="flex items-center gap-2 text-sm">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/members" className={linkClass}>Lab Members</NavLink>
            <NavLink to="/publications" className={linkClass}>Publications</NavLink>
            <NavLink to="/contact" className={linkClass}>Contacts</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}