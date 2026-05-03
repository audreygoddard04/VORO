import { Link } from 'react-router-dom'
import { Zap, MapPin, Star, ShoppingBag, Bell, BarChart2 } from 'lucide-react'
import './AppPage.css'

const features = [
  { icon: <ShoppingBag />, title: 'Order Ahead', desc: 'Pre-order your meal and skip the line. Ready when you arrive.' },
  { icon: <Star />, title: 'Rewards Hub', desc: 'Track your points, redeem rewards, and climb tiers, all in one place.' },
  { icon: <BarChart2 />, title: 'Macro Tracker', desc: 'Every VORO order auto-logs your protein, carbs, fat, and calories.' },
  { icon: <Bell />, title: 'Exclusive Deals', desc: 'App-only offers, flash sales, and early access to new menu drops.' },
  { icon: <MapPin />, title: 'Find Locations', desc: 'Real-time hours, wait times, and directions to every VORO.' },
  { icon: <Zap />, title: 'Challenge Mode', desc: 'Weekly eating challenges with leaderboards and bonus points.' },
]

const screens = [
  { label: 'Order', color: '#c8a84b' },
  { label: 'Rewards', color: '#c0392b' },
  { label: 'Track', color: '#2e7d32' },
]

export default function AppPage() {
  return (
    <main className="app-page">
      <div className="app-page__hero">
        <div className="container">
          <div className="app-page__hero-inner">
            <div className="app-page__hero-text">
              <span className="section-label">VORO App</span>
              <h1>YOUR PERFORMANCE<br />IN YOUR POCKET</h1>
              <p>Order ahead. Earn rewards. Track macros. Access exclusive deals. Everything VORO, one tap away.</p>
              <div className="app-page__store-btns">
                <a href="#" className="app-store-btn-lg">
                  <span>🍎</span>
                  <div>
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </div>
                </a>
                <a href="#" className="app-store-btn-lg">
                  <span>▶</span>
                  <div>
                    <small>Get it on</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
              <div className="app-page__stats">
                <div><strong>4.9★</strong><span>App Rating</span></div>
                <div><strong>Free</strong><span>Always</span></div>
                <div><strong>iOS + Android</strong><span>Available</span></div>
              </div>
            </div>
            <div className="app-page__phones">
              {screens.map((s,i) => (
                <div key={s.label} className="app-phone" style={{'--sc': s.color, '--delay': `${i * 0.1}s`, '--offset': `${i * 40}px`}}>
                  <div className="app-phone__inner">
                    <div className="app-phone__header" style={{borderBottom:`2px solid ${s.color}`}}>VORO</div>
                    <div className="app-phone__screen-label" style={{color: s.color}}>{s.label}</div>
                    <div className="app-phone__lines">
                      {[80,60,90,70,50].map((w,j) => (
                        <div key={j} className="app-phone__line" style={{width:`${w}%`, background: j===0 ? s.color : undefined}} />
                      ))}
                    </div>
                    <div className="app-phone__btn" style={{background: s.color}}>→</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="app-features section">
        <div className="container">
          <span className="section-label">Features</span>
          <h2 className="section-h2">EVERYTHING YOU NEED.<br />NOTHING YOU DON'T.</h2>
          <div className="app-features__grid">
            {features.map(f => (
              <div key={f.title} className="app-feature-card">
                <div className="app-feature-card__icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="app-download-cta">
        <div className="container">
          <div className="app-download-cta__inner">
            <span className="section-label">Download Now</span>
            <h2>JOIN THE VORO COMMUNITY</h2>
            <p>100% free. Launches Spring 2026. Be the first to download and get exclusive early-adopter rewards.</p>
            <form className="app-notify-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" />
              <button type="submit" className="btn-primary">Notify Me</button>
            </form>
            <div className="app-store-btns-row">
              <a href="#" className="app-store-btn-lg">
                <span>🍎</span>
                <div><small>Download on the</small><strong>App Store</strong></div>
              </a>
              <a href="#" className="app-store-btn-lg">
                <span>▶</span>
                <div><small>Get it on</small><strong>Google Play</strong></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
