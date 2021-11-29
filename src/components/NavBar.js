import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Button2 } from './Button2';
import { Link } from 'react-router-dom';
import './Navbar.css';

 function Navbar() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

   const showButton = () => {
     if (window.innerWidth <= 960) {
       setButton(false);
     } else {
       setButton(true);
     }
   };

   useEffect(() => {
     showButton();
   }, []);

   window.addEventListener('resize', showButton);

   return (
     <>
       <nav className='navbar'>
         <div className='navbar-container'>
           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
             MADE WITH LEFTOVERS
             <i class='fab fa-typo3' />
           </Link>
           <div className='menu-icon' onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-item'>
               <Link to='/search-bar' className='nav-links' onClick={closeMobileMenu}>
                 Home
               </Link>
             </li>
             <li className='nav-item'>
               <Link
                 to='/services'
                 className='nav-links'
                 onClick={closeMobileMenu}
               >
                  Add Your Own Recipes
               </Link>
             </li>
             <li className='nav-item'>
               <Link
                 to='/favourites'
                 className='nav-links'
                 onClick={closeMobileMenu}
               >
                 Favourites
               </Link>
             </li>

             <li>
               <Link
                 to='/sign-in'
                 className='nav-links-mobile'
                 onClick={closeMobileMenu}
               >
                 Sign In
               </Link>
             </li>
             <li>
               <Link
                 to='/sign-up'
                 className='nav-links-mobile'
                 onClick={closeMobileMenu}
               >
                 Sign Up
               </Link>
             </li>
           </ul>
           {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
           {button && <Button2 buttonStyle='btn--outline'>SIGN UP</Button2>}
         </div>
       </nav>
     </>
   );
 }

 export default Navbar;