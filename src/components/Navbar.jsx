import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, ChevronDown } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="VORO home">
          <img src="/images/VOROlogo.png" alt="VORO" className="navbar__logo-img" />
        </Link>

        <ul className="navbar__links">
          <li><Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link></li>
          <li><Link to="/locations" className={location.pathname === '/locations' ? 'active' : ''}>Locations</Link></li>
          <li><Link to="/promotions" className={location.pathname === '/promotions' ? 'active' : ''}>Deals</Link></li>
          <li><Link to="/membership" className={location.pathname === '/membership' ? 'active' : ''}>Membership</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          <li><Link to="/app" className={location.pathname === '/app' ? 'active' : ''}>App</Link></li>
        </ul>

        <div className="navbar__actions">
          {user ? (
            <div className="navbar__user">
              <div className="navbar__user-trigger">
                <div className="navbar__avatar">{user.name[0].toUpperCase()}</div>
                <span>{user.name}</span>
                <ChevronDown size={14} />
              </div>
              <div className="navbar__dropdown">
                <div className="navbar__dropdown-header">
                  <span className="navbar__tier">{user.tier} Member</span>
                  <span className="navbar__points">{user.points.toLocaleString()} PTS</span>
                </div>
                <Link to="/membership">My Rewards</Link>
                <Link to="/promotions">My Offers</Link>
                <button onClick={logout}>Sign Out</button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="navbar__signin">Sign In</Link>
              <Link to="/login?tab=join" className="btn-primary navbar__join">Join Free</Link>
            </>
          )}
          <button className="navbar__hamburger" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="navbar__mobile">
          <Link to="/menu">Menu</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/promotions">Deals</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/app">App</Link>
          <div className="navbar__mobile-cta">
            <Link to="/login" className="btn-outline" style={{width:'100%',textAlign:'center',display:'block'}}>Sign In</Link>
            <Link to="/login?tab=join" className="btn-primary" style={{width:'100%',textAlign:'center',display:'block',marginTop:'10px'}}>Join Free</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
