import React from 'react';
import NavContent from './navcontent';

function NavBar(){

    return (<div className='header'>
      <nav className='navbar'>
      <div >
      <h3 >puppydate</h3>
      </div>
      
      <div >
      <a className='nav-links' href='#contact'>
      CONTACT
      </a>
      <a className='nav-links' href='#price'>
      PRICING
      </a>
      <a className='nav-links' href='#service'>
      SERVICES
      </a>
      </div>

      </nav>

      <NavContent />

      </div>
      
    )}

export default NavBar;