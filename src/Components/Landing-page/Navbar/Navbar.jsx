import React from 'react'
import Logo from './Logo/Logo';
import NavTabs from './NavTabs/NavTabs';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import './Navbar.css';

function Navbar() {
return (
  <nav className="w-full h-[100px] bg-[#EBF8FF] shadow-md sticky top-0 z-[1000]">
      <div className="max-w-[1440px] h-full mx-auto px-[40px] flex justify-between items-center">
         <Logo />
         <NavTabs />
         <LanguageSelector />
      </div>
  </nav>
  )
}

export default Navbar;