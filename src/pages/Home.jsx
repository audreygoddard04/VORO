import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Target, ChevronDown } from 'lucide-react'
import './Home.css'

const menuHighlights = [
  { name: 'CUTS', cal: 'Steaks', protein: 'Build your base', tag: 'Core', desc: 'Choose your steak cut and plate foundation.', color: '#c0392b' },
  { name: 'SIDES', cal: 'Pair it', protein: 'Classic add-ons', tag: 'Essential', desc: 'Simple sides to complete your steak plate.', color: '#c8a84b' },
  { name: 'TOP IT', cal: 'Upgrade', protein: 'Signature toppers', tag: 'Popular', desc: 'Finish with sauces, butters, and extras.', color: '#2e7d32' },
  { name: "CHEF'S CHOICE", cal: 'Specials', protein: 'Limited menu', tag: 'Featured', desc: 'Rotating builds like surf and turf and carnivore.', color: '#6a1b9a' },
]

const stats = [
  { num: '50g', label: 'Avg Protein Per Meal' },
  { num: '0', label: 'Artificial Additives' },
  { num: '100%', label: 'Real Ingredients' },
  { num: '1', label: 'Mission: Fuel Greatness' },
]

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grid" />
          <div className="hero__gradient" />
        </div>
        <div className="hero__content container">
          <div className="hero__eyebrow">
            <span className="section-label">Performance Fast Food | Dallas, TX</span>
          </div>
          <h1 className="hero__title">
            FUEL<br />
            FOR THE<br />
            <span className="hero__title-driven">DRIVEN</span>
          </h1>
          <p className="hero__sub">
            VORO is the first performance-focused fast-food brand.<br />
            Real protein. Clean ingredients. Meat-driven plates built<br />
            for people who train, perform, and <strong>win.</strong>
          </p>
          <div className="hero__cta">
            <Link to="/menu" className="btn-primary">Explore Menu <ArrowRight size={16} style={{display:'inline',marginLeft:6}} /></Link>
            <Link to="/login?tab=join" className="btn-outline">Join VORO Elite</Link>
            <a href="#waitlist" className="btn-outline">Join the Waitlist</a>
          </div>
          <div className="hero__scroll">
            <ChevronDown size={20} />
          </div>
        </div>
        <div className="hero__stats">
          {stats.map(s => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div className="ticker">
        <div className="ticker__track">
          {Array(4).fill('FUEL YOUR PERFORMANCE • REAL PROTEIN • NO COMPROMISES • BUILT FOR CHAMPIONS • LAUNCHING SPRING 2026 • ').join('')}
        </div>
      </div>

      {/* MENU SPOTLIGHT */}
      <section className="menu-spot section">
        <div className="container">
          <div className="menu-spot__header">
            <div>
              <span className="section-label">The Menu</span>
              <h2 className="section-title">BUILT DIFFERENT</h2>
            </div>
            <Link to="/menu" className="btn-outline">View Full Menu</Link>
          </div>
          <div className="menu-spot__grid">
            {menuHighlights.map((item, i) => (
              <div key={item.name} className="menu-card" style={{'--accent': item.color}}>
                <div className="menu-card__img">
                  <div className="menu-card__placeholder" />
                  <span className="menu-card__tag">{item.tag}</span>
                </div>
                <div className="menu-card__body">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="menu-card__macros">
                    <span>{item.cal}</span>
                    <span className="menu-card__protein">{item.protein}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="promo-banner">
        <div className="promo-banner__inner container">
          <div>
            <span className="section-label">Limited Time</span>
            <h2>FIRST MEAL DISCOUNT</h2>
            <p>Join VORO Elite before opening day and unlock a discounted first meal during launch week.</p>
          </div>
          <Link to="/promotions" className="btn-primary">Claim Offer <ArrowRight size={16} style={{display:'inline',marginLeft:6}} /></Link>
        </div>
      </section>

      <section className="flagship section">
        <div className="container">
          <img src="/images/OurFlagship.png" alt="VORO Dallas flagship preview" className="flagship__image" />
          <h2 className="flagship__city">DALLAS, TX</h2>
          <p className="flagship__launch">Launching Spring 2026...</p>
        </div>
      </section>

      {/* WHY VORO */}
      <section className="why section">
        <div className="container">
          <span className="section-label">Why VORO</span>
          <h2 className="section-title">PERFORMANCE FOOD.<br />FINALLY FAST.</h2>
          <div className="why__grid">
            <div className="why-card">
              <div className="why-card__icon"><Zap /></div>
              <h3>Protein-First</h3>
              <p>Every plate engineered with 40–60g of complete protein. No fillers, no shortcuts.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon"><Shield /></div>
              <h3>Clean Label</h3>
              <p>Zero artificial preservatives, colors, or flavors. We read every ingredient so you don't have to.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon"><Target /></div>
              <h3>Macro Transparent</h3>
              <p>Full nutrition data on every item. Build your meal knowing exactly what you're fueling with.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section className="member-cta">
        <div className="member-cta__inner container">
          <div className="member-cta__text">
            <span className="section-label">VORO Elite</span>
            <h2>EARN WHILE YOU EAT</h2>
            <p>Join our loyalty program. Earn points on every order, unlock exclusive drops, early access, and member-only deals. Free to join.</p>
            <div className="member-cta__tiers">
              <div className="tier-chip tier-chip--bronze">Bronze</div>
              <div className="tier-chip tier-chip--silver">Silver</div>
              <div className="tier-chip tier-chip--gold">Gold</div>
              <div className="tier-chip tier-chip--elite">Elite</div>
            </div>
            <Link to="/membership" className="btn-primary" style={{marginTop:'32px'}}>Explore Membership</Link>
          </div>
          <div className="member-cta__visual">
            <div className="member-cta__card">
              <div className="member-cta__card-logo">VORO</div>
              <div className="member-cta__card-tier">GOLD MEMBER</div>
              <div className="member-cta__card-name">AUDREY GODDARD</div>
              <div className="member-cta__card-points">1,240 PTS</div>
              <div className="member-cta__card-dots">
                <div /><div /><div /><div />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP CTA */}
      <section className="app-cta section">
        <div className="container">
          <div className="app-cta__inner">
            <div>
              <span className="section-label">VORO App</span>
              <h2 className="section-title">ORDER AHEAD.<br />SKIP THE LINE.</h2>
              <p>Pre-order your meal, track your macros, manage your rewards, and get exclusive app-only deals. Available on iOS and Android.</p>
              <div className="app-cta__btns">
                <a href="#" className="app-store-btn">
                  <span>🍎</span>
                  <div><small>Download on the</small><strong>App Store</strong></div>
                </a>
                <a href="#" className="app-store-btn">
                  <span>▶</span>
                  <div><small>Get it on</small><strong>Google Play</strong></div>
                </a>
              </div>
              <Link to="/app" className="btn-outline" style={{marginTop:'24px',display:'inline-block'}}>Learn More About the App</Link>
            </div>
            <div className="app-cta__phone">
              <div className="phone-mockup">
                <div className="phone-mockup__screen">
                  <div className="phone-mockup__header">VORO</div>
                  <div className="phone-mockup__order">
                    <div className="phone-mockup__item">Ribeye · $18.99</div>
                    <div className="phone-mockup__item">Loaded Potato · $5.99</div>
                    <div className="phone-mockup__total">Total: $24.98</div>
                    <div className="phone-mockup__btn">ORDER NOW</div>
                  </div>
                  <div className="phone-mockup__macro">
                    <div>Protein</div>
                    <div className="phone-mockup__bar"><div style={{width:'84%'}} /></div>
                    <div>100g</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section className="waitlist" id="waitlist">
        <div className="container">
          <div className="waitlist__inner">
            <span className="section-label">Dallas · Spring 2026</span>
            <h2>BE FIRST THROUGH THE DOOR</h2>
            <p>Join the waitlist for exclusive pre-launch access and member-only launch updates.</p>
            <form className="waitlist__form" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="your@email.com" />
              <label className="waitlist__consent">
                <input type="checkbox" />
                <span>Join our waitlist for a chance to win exclusive access to pre-launch tasting events, VORO merchandise, and a meal on us on day 1.</span>
              </label>
              <button type="submit" className="btn-primary">Join the waitlist</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
