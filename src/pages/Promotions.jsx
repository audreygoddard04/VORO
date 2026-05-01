import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Promotions.css'

const promos = [
  { id:1, tag:'Launch Offer', title:'FIRST MEAL DISCOUNTED', desc:'Join VORO Elite before opening day and get a discounted first meal during launch week.', expires:'May 31, 2026', members:false, cta:'Claim Now', ctaLink:'/login?tab=join', hot:true },
  { id:2, tag:'Limited Time', title:'DOUBLE POINTS TUESDAYS', desc:'Every Tuesday, earn 2x points on your entire order. Stack it with existing rewards.', expires:'Ongoing', members:true, cta:'Order Tuesday', ctaLink:'/menu', hot:false },
  { id:3, tag:'Members Only', title:'PROTEIN SHAKES BOGO', desc:'VORO Elite members get buy one, get one free on protein shakes for a limited time.', expires:'May 31, 2026', members:true, cta:'Redeem', ctaLink:'/membership', hot:false },
  { id:4, tag:'Combo Deal', title:'BUILD YOUR PLATE | SAVE $4', desc:'Any bowl + side + drink combo. Mix and match from the full menu. Save $4 automatically.', expires:'Ongoing', members:false, cta:'See Menu', ctaLink:'/menu', hot:false },
  { id:5, tag:'App Exclusive', title:'10% OFF FIRST APP ORDER', desc:'Download the VORO app and your first order gets 10% off automatically. App-only deal.', expires:'Launch period', members:false, cta:'Get App', ctaLink:'/app', hot:true },
  { id:6, tag:'Referral', title:'GIVE $5, GET $5', desc:'Refer a friend to VORO Elite. When they place their first order, you both get $5 off.', expires:'Ongoing', members:true, cta:'Share Code', ctaLink:'/membership', hot:false },
]

export default function Promotions() {
  const { user } = useAuth()
  return (
    <main className="promos-page">
      <div className="promos-page__hero">
        <div className="container">
          <span className="section-label">Deals & Promotions</span>
          <h1>THIS WEEK'S<br />BEST OFFERS</h1>
          <p>Member-exclusive rewards, launch deals, and limited-time savings. Updated weekly.</p>
        </div>
      </div>

      <div className="promos-page__body container">
        {!user && (
          <div className="promos-page__join-cta">
            <div>
              <strong>Unlock member-only deals</strong>
              <p>Some offers are exclusive to VORO Elite members. Join free and unlock everything.</p>
            </div>
            <Link to="/login?tab=join" className="btn-gold">Join Free</Link>
          </div>
        )}

        <div className="promos-grid">
          {promos.map(p => (
            <div key={p.id} className={`promo-card ${p.hot ? 'promo-card--hot' : ''} ${p.members && !user ? 'promo-card--locked' : ''}`}>
              {p.hot && <div className="promo-card__hot">🔥 Hot Deal</div>}
              {p.members && !user && <div className="promo-card__lock-badge">Members Only</div>}
              <div className="promo-card__body">
                <span className="promo-card__tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="promo-card__expires">Expires: {p.expires}</div>
              </div>
              <div className="promo-card__footer">
                {p.members && !user ? (
                  <Link to="/login?tab=join" className="promo-card__cta locked-cta">Join to Unlock</Link>
                ) : (
                  <Link to={p.ctaLink} className="promo-card__cta">{p.cta}</Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="promos-page__banner">
          <div>
            <span className="section-label">Coming Soon</span>
            <h3>VORO REWARDS CHALLENGES</h3>
            <p>Weekly eating challenges with bonus points, exclusive prizes, and community leaderboards. Launching with the app.</p>
          </div>
          <Link to="/app" className="btn-outline">Learn More</Link>
        </div>
      </div>
    </main>
  )
}
