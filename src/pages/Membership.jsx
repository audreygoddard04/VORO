import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Star, Gift, Zap, Lock } from 'lucide-react'
import './Membership.css'

const tiers = [
  { name:'Bronze', pts:'0–499', color:'#cd7f32', perks:['10 pts per $1','Birthday bonus','Member deals'] },
  { name:'Silver', pts:'500–1,499', color:'#c0c0c0', perks:['12 pts per $1','Free side monthly','Early menu drops','Priority support'] },
  { name:'Gold', pts:'1,500–3,999', color:'#c8a84b', perks:['15 pts per $1','Free item monthly','Exclusive drops','Merch discounts','Invite-only events'] },
  { name:'Elite', pts:'4,000+', color:'#e8c96a', perks:['20 pts per $1','Chef\'s table invites','Free meal monthly','VIP early access','Custom VORO gear','Personal nutrition consult'] },
]

const redeemable = [
  { pts: 500, value: '$5 Off', icon: '💵' },
  { pts: 1000, value: 'Free Side', icon: '🍟' },
  { pts: 2000, value: 'Free Entrée', icon: '🥩' },
  { pts: 5000, value: 'VORO Merch', icon: '👕' },
  { pts: 10000, value: 'VIP Event Access', icon: '⭐' },
]

export default function Membership() {
  const { user } = useAuth()
  const pct = user ? Math.min(100, (user.points / 1500) * 100) : 0

  return (
    <main className="membership">
      <div className="membership__hero">
        <div className="container">
          <div className="membership__hero-content">
            <div className="membership__hero-copy">
              <span className="section-label">VORO Elite</span>
              <h1>FUEL.<br />EARN.<br />WIN.</h1>
              <p>Free membership that rewards you every time you fuel up. Points never expire. Rewards always grow.</p>
              {!user && <Link to="/login?tab=join" className="btn-primary" style={{marginTop:'32px',display:'inline-block'}}>Join Free Today</Link>}
            </div>
            <img src="/images/VOROlogo.png" alt="VORO logo" className="membership__logo" />
          </div>
        </div>
      </div>

      {user && (
        <section className="membership__dashboard section">
          <div className="container">
            <span className="section-label">Your Dashboard</span>
            <div className="dash-grid">
              <div className="dash-card dash-card--main">
                <div className="dash-card__tier">{user.tier} Member</div>
                <div className="dash-card__name">{user.name}</div>
                <div className="dash-card__points">{user.points.toLocaleString()}</div>
                <div className="dash-card__pts-label">Points Balance</div>
                <div className="dash-card__progress-label">
                  <span>Progress to Elite</span>
                  <span>{user.points} / 4,000</span>
                </div>
                <div className="dash-card__bar">
                  <div style={{width:`${pct}%`}} />
                </div>
              </div>
              <div className="dash-card">
                <Gift size={24} color="var(--gold)" />
                <div className="dash-card__stat">3</div>
                <div className="dash-card__stat-label">Rewards Available</div>
              </div>
              <div className="dash-card">
                <Star size={24} color="var(--gold)" />
                <div className="dash-card__stat">12</div>
                <div className="dash-card__stat-label">Orders This Year</div>
              </div>
              <div className="dash-card">
                <Zap size={24} color="var(--gold)" />
                <div className="dash-card__stat">2</div>
                <div className="dash-card__stat-label">Active Deals</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TIERS */}
      <section className="membership__tiers section">
        <div className="container">
          <span className="section-label">Membership Tiers</span>
          <h2 className="section-h2">THE MORE YOU EAT,<br />THE MORE YOU EARN</h2>
          <div className="tiers-grid">
            {tiers.map(t => (
              <div key={t.name} className="tier-card" style={{'--tc': t.color}}>
                <div className="tier-card__name">{t.name}</div>
                <div className="tier-card__pts">{t.pts} pts</div>
                <ul className="tier-card__perks">
                  {t.perks.map(p => <li key={p}>✓ {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDEEM */}
      <section className="membership__redeem section">
        <div className="container">
          <span className="section-label">Redeem Points</span>
          <h2 className="section-h2">TRADE POINTS<br />FOR REWARDS</h2>
          <div className="redeem-grid">
            {redeemable.map(r => (
              <div key={r.pts} className={`redeem-card ${user && user.points >= r.pts ? '' : 'locked'}`}>
                <div className="redeem-card__icon">{r.icon}</div>
                <div className="redeem-card__value">{r.value}</div>
                <div className="redeem-card__pts">{r.pts.toLocaleString()} pts</div>
                {user && user.points >= r.pts ? (
                  <button className="btn-primary" style={{width:'100%',fontSize:'0.8rem',padding:'10px'}}>Redeem</button>
                ) : (
                  <div className="redeem-card__lock"><Lock size={14} /> {user ? `Need ${(r.pts - user.points).toLocaleString()} more pts` : 'Sign in to redeem'}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {!user && (
        <section className="membership__cta">
          <div className="container" style={{textAlign:'center'}}>
            <h2>READY TO EARN?</h2>
            <p>Join VORO Elite for free and start earning on your first order.</p>
            <Link to="/login?tab=join" className="btn-primary" style={{marginTop:'24px',display:'inline-block'}}>Create Free Account</Link>
          </div>
        </section>
      )}
    </main>
  )
}
