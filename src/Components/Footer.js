import React from 'react';
import {Link} from "react-router-dom";
import NavLinks from './NavLinks';
import footerLogo from '../assets/logo-footer.png';
import "./Footer.css";


 const Footer = () => {
   return (
      <footer>
        <section>
          <img src={footerLogo} alt='logo' />
        </section>
        <section>
          <NavLinks hideMobile={false}/>
        </section>
        <section>
          <h3>Contact</h3>
          <address>
            Little Lemon <br />
            Somewhere around USA<br />
            Chicago, IL 404XX <br />
            USA
          </address>
        </section>
        <section>
          <h3>Social Media links</h3>
          <ul className='social-media'>
            <Link to="https://www.facebook.com/">
                <i className="bi bi-facebook"></i>
            </Link>
            <Link to="https://www.instagram.com/">
                <i className="bi bi-instagram"></i>
            </Link>
            <Link to="http://www.twitter.com/">
                <i className="bi bi-twitter-x"></i>
            </Link>
          </ul>
        </section>
      </footer>
   );
 };

 export default Footer;