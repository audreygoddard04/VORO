import { useState } from 'react'
import './Menu.css'

const categories = ['All', 'Cuts', 'Sides', 'Top It', 'Bites', 'Hydration', "Chef's Choice"]

const items = [
  { id:1, cat:'Cuts', name:'Ribeye', price:'$18.99', desc:'Rich, marbled, and grilled to order.', tag:'Signature', badge:'gold' },
  { id:2, cat:'Cuts', name:'Sirloin', price:'$15.99', desc:'Lean and classic with bold flavor.', tag:null },
  { id:3, cat:'Cuts', name:'Filet', price:'$22.99', desc:'Tender center cut for a clean finish.', tag:'Premium', badge:'red' },
  { id:4, cat:'Sides', name:'Roasted Veg', price:'$4.99', desc:'Seasonal vegetables, charred and finished with sea salt.', tag:null },
  { id:5, cat:'Sides', name:'Loaded Potato', price:'$5.99', desc:'Baked potato with house butter and herbs.', tag:'Popular', badge:'green' },
  { id:6, cat:'Top It', name:'Garlic Butter', price:'$1.99', desc:'Warm garlic herb butter to finish any cut.', tag:null },
  { id:7, cat:'Top It', name:'Peppercorn Sauce', price:'$2.49', desc:'Creamy black peppercorn sauce.', tag:null },
  { id:8, cat:'Bites', name:'Steak Bites', price:'$8.99', desc:'Seared steak bites with VORO seasoning.', tag:'Best Seller', badge:'gold' },
  { id:9, cat:'Bites', name:'Bone Broth Cup', price:'$3.99', desc:'Hot savory broth made in-house daily.', tag:null },
  { id:10, cat:'Hydration', name:'Electrolyte Water', price:'$3.49', desc:'Mineral-balanced hydration.', tag:null },
  { id:11, cat:'Hydration', name:'Protein Shake', price:'$7.99', desc:'Member favorite. BOGO for VORO Elite members.', tag:'Members BOGO', badge:'red' },
  { id:12, cat:"Chef's Choice", name:'Surf and Turf', price:'$24.99', desc:'Chef-selected steak and seafood pairing.', tag:'Chef Feature', badge:'gold' },
  { id:13, cat:"Chef's Choice", name:'Carnivore', price:'$23.99', desc:'A heavy protein plate built for serious appetite.', tag:'High Protein', badge:'green' },
]

const badgeColors = { gold: '#c8a84b', green: '#2e7d32', red: '#c0392b' }

export default function Menu() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? items : items.filter(i => i.cat === cat)

  return (
    <main className="menu-page">
      <div className="menu-page__hero">
        <div className="container">
          <span className="section-label">The Menu</span>
          <h1>BUILT FOR<br />PERFORMANCE</h1>
          <p>Every item engineered with complete protein, clean ingredients, and taste that earns it.</p>
        </div>
      </div>

      <div className="menu-page__body container">
        <div className="menu-cats">
          {categories.map(c => (
            <button key={c} className={`menu-cat-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>

        <div className="menu-page__grid">
          {filtered.map(item => (
            <div key={item.id} className="menu-item-card">
              <div className="menu-item-card__img">
                <div className="menu-item-card__placeholder" />
                {item.tag && (
                  <span className="menu-item-card__tag" style={{background: badgeColors[item.badge]}}>
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="menu-item-card__body">
                <div className="menu-item-card__meta">
                  <span className="menu-item-card__cat">{item.cat}</span>
                  <span className="menu-item-card__price">{item.price}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
