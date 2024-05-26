import { useState } from 'react';

export function NavBar() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };

    return (
      <>
      <nav>
         <h5>MB</h5>
            <ul className="nav_list hide_mobile">
               <li><a href="/">Over mij</a></li>
               <li><a href="/projecten">Projecten</a></li>
               <li><a href="/blog">Contact</a></li>
            </ul>
               <span onClick={toggleMenu} className="material-symbols-outlined hide_desktop">
                  menu
               </span>
      </nav>
      <ul className={`hide_desktop hamburger ${isOpen ? '' : 'open'}`}>
               <li><a href="/">Over mij</a></li>
               <li><a href="/projecten">Projecten</a></li>
               <li><a href="/blog">Contact</a></li>
      </ul>
      </>
     
    )
  }