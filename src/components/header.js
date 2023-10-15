import React from 'react'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Your Logo</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Signup</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">Save Online</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Download</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header