import React from 'react';
import logo from '../assets/logo.svg';
import Nav from './Nav';


 const Header = () => {
   return (
      <header>
        <img src={logo} alt="logo" />
        <Nav />
      </header>
   );
 };

 export default Header;