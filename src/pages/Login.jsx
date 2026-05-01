import { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

export default function Login() {
  const [params] = useSearchParams()
  const [tab, setTab] = useState(params.get('tab') === 'join' ? 'join' : 'login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    if (login(email, password)) { navigate('/membership') }
    else setMsg('Invalid credentials. Try again.')
  }

  const handleJoin = e => {
    e.preventDefault()
    login(email, password)
    navigate('/membership')
  }

  return (
    <main className="login-page">
      <div className="login-page__bg" />
      <div className="login-page__inner">
        <Link to="/" className="login-page__logo">VORO</Link>
        <div className="login-box">
          <div className="login-tabs">
            <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Sign In</button>
            <button className={tab === 'join' ? 'active' : ''} onClick={() => setTab('join')}>Join Free</button>
          </div>

          {tab === 'login' ? (
            <form onSubmit={handleLogin} className="login-form">
              <h2>Welcome back.</h2>
              <p>Sign in to access your rewards, orders, and exclusive offers.</p>
              {msg && <div className="login-form__error">{msg}</div>}
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <a href="#" className="login-form__forgot">Forgot password?</a>
              <button type="submit" className="btn-primary" style={{width:'100%',marginTop:'8px'}}>Sign In</button>
              <div className="login-form__divider"><span>or</span></div>
              <button type="button" className="login-social-btn">
                <span>G</span> Continue with Google
              </button>
              <button type="button" className="login-social-btn">
                <span>🍎</span> Continue with Apple
              </button>
            </form>
          ) : (
            <form onSubmit={handleJoin} className="login-form">
              <h2>Join VORO Elite.</h2>
              <p>Free membership. Earn points, unlock deals, get early access. Forever free.</p>
              <div className="login-join-perks">
                <div>✓ Earn 10pts per $1 spent</div>
                <div>✓ Free birthday meal</div>
                <div>✓ Early access to new items</div>
                <div>✓ Member-only promotions</div>
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Audrey Goddard" value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Create a password" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="btn-primary" style={{width:'100%'}}>Create Free Account</button>
              <p className="login-form__terms">By joining you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
