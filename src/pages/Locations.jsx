import './Locations.css'

const locations = [
  { id:1, city:'Dallas', state:'TX', address:'5750 Legacy Dr, Plano, TX 75024', status:'Opening Spring 2026', hours:'Mon–Sun 10am–10pm', tag:'Flagship', lat:33.07, lng:-96.82 },
]

export default function Locations() {
  return (
    <main className="locations-page">
      <div className="locations-page__hero">
        <div className="container">
          <span className="section-label">Find VORO</span>
          <h1>OUR<br />LOCATIONS</h1>
          <p>Starting in Dallas, TX, and growing fast. More cities coming in 2026 and beyond.</p>
        </div>
      </div>

      <div className="locations-page__body container">
        <div className="location-card location-card--flagship">
          <div className="location-card__left">
            <div className="location-card__tag">Flagship</div>
            <div className="location-card__city">Dallas, TX</div>
            <div className="location-card__address"></div>
            <div className="location-card__status">Opening Spring 2026</div>
            <div className="location-card__hours">Mon–Sun · 10am–10pm (est.)</div>
            <div className="location-card__actions">
              <button className="btn-primary">Get Directions</button>
              <button className="btn-outline">Join Waitlist</button>
            </div>
          </div>
          <div className="location-card__map">
            <div className="location-map-placeholder">
              <div className="location-map-pin">📍</div>
              <div>Dallas, TX</div>
              <small>Map coming soon</small>
            </div>
          </div>
        </div>

        <div className="coming-soon-section">
          <span className="section-label">Expanding Soon</span>
          <h2>MORE CITIES. MORE FUEL.</h2>
          <p>We're growing fast. Want VORO in your city? Let us know.</p>
          <div className="city-grid">
            {['Austin, TX','Houston, TX','Phoenix, AZ','Denver, CO','Nashville, TN','Chicago, IL','New York, NY','Los Angeles, CA'].map(c => (
              <div key={c} className="city-chip">{c}</div>
            ))}
          </div>
          <form className="city-request-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Request a city..." />
            <button type="submit" className="btn-primary">Submit</button>
          </form>
        </div>

        <div className="franchise-cta">
          <span className="section-label">Franchise</span>
          <h2>BRING VORO TO YOUR MARKET</h2>
          <p>We're actively looking for franchise partners in major US markets. Performance-focused food is the future, and we want you to be part of it.</p>
          <a href="mailto:franchise@eatvoro.com" className="btn-primary">Inquire About Franchising</a>
        </div>
      </div>
    </main>
  )
}
