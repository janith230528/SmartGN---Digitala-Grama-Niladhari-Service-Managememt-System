import React from 'react'
import './Navbar.css'
import Logo from './Logo/Logo';
import NavTabs from './NavTabs/NavTabs';
import LanguageSelector from './LanguageSelector/LanguageSelector';


function Navbar() {
  return (
    <nav className="navbar"> 
      <div className="nav-container"> 
         <Logo />
         <NavTabs />
         <LanguageSelector />
      </div>
</nav>
  )
}

export default Navbar;