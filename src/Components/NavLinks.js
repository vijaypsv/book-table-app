
 const NavLinks = (props) => {

   return (
     <nav aria-label='navigation menu'>
       <ul className={`${props.hideMobile ? 'hide-mobile' : ''} nav-links`}>
         <li>
           <a href='/' aria-label='Home'>Home</a>
         </li>
         <li>
           <a href='/about' aria-label='About'>About</a>
         </li>
         <li>
           <a href='/menu' aria-label='Menu'>Menu</a>
         </li>
         <li>
           <a href='/reservations' aria-label='Reservations'>Reservations</a>
         </li>
         <li>
           <a href='/order' aria-label='Order Online'>Order Online</a>
         </li>
         <li>
           <a href='/login' aria-label='Login'>Login</a>
         </li>
       </ul>
     </nav>
   );
 };

 export default NavLinks;