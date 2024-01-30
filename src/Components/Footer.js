import React from 'react';
import {Link} from "react-router-dom";
import NavLinks from './NavLinks';
import footerLogo from '../assets/logo-footer.png';
import "./Footer.css";


 const Footer = () => {
   return (
      <footer>
        <section className='footer-logo'>
          <img src={footerLogo} alt='footer logo' />
        </section>
        <section className='footer-links'>
          <NavLinks hideMobile={false}/>
        </section>
        <section className='footer-contact'>
          <h3>Contact</h3>
          <address>
            Little Lemon <br />
            Somewhere around USA<br />
            Chicago, IL 404XX <br />
            USA
          </address>
        </section>
        <section className='footer-social-media-icons'>
          <h3>Social Media links</h3>
          <ul className='social-media'>
            <Link to="https://www.facebook.com/" aria-label='facebook'>
                <i className="bi bi-facebook"></i>
            </Link>
            <Link to="https://www.instagram.com/" aria-label='instagram'>
                <i className="bi bi-instagram"></i>
            </Link>
            <Link to="http://www.twitter.com/" aria-label='twitter'>
                <i className="bi bi-twitter-x"></i>
            </Link>
          </ul>
        </section>
      </footer>
   );
 };

 export default Footer;