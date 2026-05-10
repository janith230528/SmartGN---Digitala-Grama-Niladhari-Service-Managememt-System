import React from 'react'
import './Navbar.css'
import logoImage from '../../assets/SmartGN logo/3.png';

function Navbar() {
  return (
    <nav className="navbar"> 
      <div className="nav-container"> 
         <div className="logo-section">
          <img src={logoImage} alt="SmartGN Logo" className="logo" />
        </div>
          
        <div className="nav-links">
          <div className ="nav-link-container">
          <img src="home_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="homeicon" className="icons" />  
          <a href="#home" className="nav-link">Home</a>
          </div> 
          <div className ="nav-link-container">
            <img src="info_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="abouticon" className="icons" />
            <a href="#about" className="nav-link">About</a>
          </div>
          <div className ="nav-link-container">
            <img src="accessibility_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="servicesicon" className="icons" />
            <a href="#services" className="nav-link">Services</a>
          </div>
        </div>

         <div className="language-selector">
            <span className="language">English</span>
          </div>
      </div>
</nav>
  )
}

export default Navbar;