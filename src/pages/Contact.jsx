import './Contact.css'

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-page__hero">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>GET IN TOUCH</h1>
          <p>Questions, partnerships, franchising interest, or media requests - we would love to hear from you.</p>
        </div>
      </section>

      <section className="contact-page__body">
        <div className="container contact-page__grid">
          <div className="contact-card">
            <h2>Reach VORO</h2>
            <p>Email: </p>
            <p>Phone: </p>
            <p>Dallas, TX</p>
            <small>Response time: </small>
          </div>

          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-topic">Topic</label>
              <select id="contact-topic" defaultValue="">
                <option value="" disabled>Select a topic</option>
                <option>General Inquiry</option>
                <option>Franchising</option>
                <option>Partnership</option>
                <option>Media</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" rows="5" placeholder="How can we help?" />
            </div>
            <button className="btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  )
}
