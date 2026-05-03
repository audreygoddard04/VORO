import { Link } from 'react-router-dom'
import { Share2, MessageCircle, Play, Users } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__marquee">
        <div className="footer__marquee-track">
          {Array(6).fill('FUEL FOR THE DRIVEN • REAL PROTEIN • CLEAN INGREDIENTS • PERFORMANCE FOOD • ').join('')}
        </div>
      </div>
      <div className="footer__main container">
        <div className="footer__brand">
          <div className="footer__logo">VORO</div>
          <p>The first performance-focused fast-food brand. Real protein. Clean ingredients. Built for champions.</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Share2 size={20} /></a>
            <a href="#" aria-label="Twitter"><MessageCircle size={20} /></a>
            <a href="#" aria-label="YouTube"><Play size={20} /></a>
            <a href="#" aria-label="Facebook"><Users size={20} /></a>
          </div>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Explore</h4>
            <Link to="/menu">Menu</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/promotions">Deals & Offers</Link>
            <Link to="/app">VORO App</Link>
          </div>
          <div className="footer__col">
            <h4>Community</h4>
            <Link to="/membership">VORO Elite</Link>
            <Link to="/about">Our Story</Link>
            <a href="#">Nutrition Info</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <a href="#">Press</a>
            <a href="#">Franchising</a>
            <Link to="/contact">Contact</Link>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer__col footer__col--app">
            <h4>Get the App</h4>
            <a href="#" className="footer__appbtn">
              <span className="footer__appbtn-icon">🍎</span>
              <div><small>Download on the</small><strong>App Store</strong></div>
            </a>
            <a href="#" className="footer__appbtn">
              <span className="footer__appbtn-icon">▶</span>
              <div><small>Get it on</small><strong>Google Play</strong></div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom container">
        <span>© 2026 VORO Performance Foods. All rights reserved.</span>
        <span>Dallas, TX | Launching Spring 2026</span>
      </div>
    </footer>
  )
}
