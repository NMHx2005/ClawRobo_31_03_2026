import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className={`navigation ${isMenuOpen ? 'menu-open' : ''}`} aria-label="Main navigation">
      <div className="nav-logo" aria-label="ClawRobo logo">
        <img src="/images/logo.png" alt="ClawRobo" className="nav-logo-image" />
      </div>

      <button
        type="button"
        className="nav-menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav-center-links nav-desktop-links">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/marketplace"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Marketplace
        </NavLink>
        <a href="#" className="nav-link">
          Docs
        </a>
      </div>

      <button type="button" className="nav-cta-button">
        Get Started
      </button>

      <div className="nav-mobile-panel">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          Dashboard
        </NavLink>
        <NavLink
          to="/marketplace"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Marketplace
        </NavLink>
        <a href="#" className="nav-link" onClick={closeMenu}>
          Docs
        </a>
        <button type="button" className="nav-cta-button nav-mobile-cta" onClick={closeMenu}>
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navigation
