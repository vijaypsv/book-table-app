import logo from '../assets/logo.svg';
import Nav from './Nav';
import "./Header.css";


 const Header = () => {

   return (
      <header className="top-navigation">
        <a href='/' aria-label='Home'><img className="logo" src={logo} alt="logo" /></a>
        <Nav />
      </header>
   );
 };

 export default Header;