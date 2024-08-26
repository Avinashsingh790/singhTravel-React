import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Contact from './contact.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Contact />
  </StrictMode>,
)
