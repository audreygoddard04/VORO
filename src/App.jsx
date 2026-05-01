import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Locations from './pages/Locations'
import Membership from './pages/Membership'
import Promotions from './pages/Promotions'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import AppPage from './pages/AppPage'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}
