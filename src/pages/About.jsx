import './About.css'

const team = [
  { name: 'Joe Hunt', role: 'Founder', bio: 'Former D1 swimmer. Built VORO from a frustration with fast food that never delivered real nutrition.' },
]

const values = [
  { title: 'Protein First', desc: 'We engineer every plate around complete protein. Not an afterthought, it\'s the foundation.' },
  { title: 'Real Ingredients', desc: 'No artificial preservatives, colors, or flavors. We read every label so you don\'t have to.' },
  { title: 'Performance Culture', desc: 'VORO is for people who train. Our culture, our menu, our brand is built for the driven.' },
  { title: 'Radical Transparency', desc: 'Full nutrition data on every item. No hidden macros. No marketing spin.' },
]

export default function About() {
  return (
    <main className="about-page">
      <div className="about-page__hero">
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1>BUILT FOR<br />THE ONES<br />WHO <em>TRAIN.</em></h1>
        </div>
      </div>

      <section className="about-story section">
        <div className="container">
          <div className="about-story__inner">
            <div>
              <span className="section-label">Why We Exist</span>
              <h2>THE PROBLEM WITH<br />FAST FOOD</h2>
            </div>
            <div className="about-story__text">
              <p>Every serious athlete knows the struggle. You train hard, track your macros, and then reality hits; you're hungry, you're in a rush, and your options are... well... garbage. Sugary trash, mystery protein, and bloated calorie bombs masquerading as food.</p>
              <p>VORO was born from that frustration. We asked: what if fast food actually worked for you? What if it was built around protein, real ingredients, and the nutritional standards that performance demands?</p>
              <p>We're not a "healthy" chain. We're a <strong>performance food brand</strong>, and there's a difference. VORO is where fast food finally earns its place in your routine.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <span className="section-label">What We Stand For</span>
          <h2 className="section-h2">OUR VALUES</h2>
          <div className="values-grid">
            {values.map((v,i) => (
              <div key={v.title} className="value-card">
                <div className="value-card__num">0{i+1}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="container">
          <span className="section-label">The Team</span>
          <h2 className="section-h2">BUILT BY PEOPLE<br />WHO LIVE IT</h2>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className="team-card">
                <div className="team-card__avatar">{t.name.split(' ').map(n=>n[0]).join('')}</div>
                <div className="team-card__info">
                  <div className="team-card__name">{t.name}</div>
                  <div className="team-card__role">{t.role}</div>
                  <p>{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-press section">
        <div className="container">
          <span className="section-label">Media</span>
          <h2 className="section-h2">IN THE PRESS</h2>
          <div className="press-grid">
            {['Forbes','Men\'s Health','Business Insider','TechCrunch','Entrepreneur'].map(p => (
              <div key={p} className="press-chip">{p}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
