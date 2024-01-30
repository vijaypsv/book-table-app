import { useState } from 'react';
import hamburger from '../assets/hamburger.svg';
import NavLinks from './NavLinks';

 const Nav = () => {

  const [hideMobile, setHideMobile] = useState(true);

  const handleClick = () => {
      return setHideMobile(!hideMobile);
  };

   return (
    <>
      <img className="hamburger" src={hamburger} alt="hamburger-menu" onClick={() => handleClick()}/>
      <NavLinks hideMobile={hideMobile}/>
     </>
   );
 };

 export default Nav;