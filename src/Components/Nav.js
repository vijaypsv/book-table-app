import { useState } from 'react';
import hamburger from '../assets/hamburger.svg';
import NavLinks from './NavLinks';

 const Nav = () => {

  const [nav, setNav] = useState(false);

  const handleClick = () => {
      return setNav(!nav);
  };

   return (
    <>
      <img className="hamburger" src={hamburger} alt="hamburger-menu" onClick={() => handleClick()}/>
      <NavLinks show={nav}/>
     </>
   );
 };

 export default Nav;