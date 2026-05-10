import React from 'react'
import './Navbar.css'
import logoImage from '../../../assets/SmartGN logo/3.png';

function Navbar() {
  return (
    <nav className="navbar"> 
      <div className="nav-container"> 
         <div className="logo-section">
          <img src={logoImage} alt="SmartGN Logo" className="logo" />
         </div>
          
        <div className="nav-links">
          <a href="#home" className="nav-link"><img src="home_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="homeicon" className="icons" />Home</a>
          <a href="#about" className="nav-link"><img src="info_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="abouticon" className="icons" />About</a>
          <a href="#services" className="nav-link"><img src="accessibility_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="servicesicon" className="icons" />Services</a>
        </div>

         <div className="language-selector">
            <div className ="nav-link-container">
              <a href="#services" className="nav-link">
              <img src="language_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="languageicon" className="icons" />
              <span>English</span>
              <img src="keyboard_arrow_down_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="languageicon" className="icons" /></a>
              </div> 
          </div>
      </div>
</nav>
  )
}

export default Navbar;