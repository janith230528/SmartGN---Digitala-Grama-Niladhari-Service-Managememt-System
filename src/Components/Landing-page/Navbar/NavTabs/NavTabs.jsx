import React from 'react'
import './NavTabs.css'

function NavTabs() {
  return (
    <>
    <div className="nav-tabs-container">
      <a href="#home" className="nav-link">
        <img src="home_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="homeicon" className="icons" />
        <span>Home</span>
      </a>
      <a href="#about" className="nav-link">
        <img src="info_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="abouticon" className="icons" />
        <span>About</span>
      </a>
      <a href="#services" className="nav-link">
        <img src="accessibility_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="servicesicon" className="icons" />
        <span>Services</span>
      </a>
    </div>

    
      <div className="menu">
        <img src="menu_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="menuicon" className="icons" id="menu-icon" />
    </div>
    
    </>
  )
}

export default NavTabs