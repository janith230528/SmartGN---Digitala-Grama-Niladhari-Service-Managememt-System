import React from 'react'
import './Navbar.css'
import Logo from './Logo/Logo';
import NavTabs from './NavTabs/NavTabs';


function Navbar() {
  return (
    <nav className="navbar"> 
      <div className="nav-container"> 
         <Logo />
         <NavTabs />
      

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