import React from 'react';
import logo from '../assets/logo.svg';
import Nav from './Nav';
import "./Header.css";


 const Header = () => {
   return (
      <header>
        <img className="logo" src={logo} alt="logo" />
        <Nav />
      </header>
   );
 };

 export default Header;