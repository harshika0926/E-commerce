import React from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import "./navbar.css";
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='menu-icon'>
        <AiOutlineMenu size={30} />
        <span>electro</span>
      </div>
      <div className='icons'>
        <div className='icon cursor-pointer'>
          <AiOutlineSearch size={30} />
        </div>
        <div className='icon cursor-pointer'>
          <AiOutlineShoppingCart size={30} />
        </div>
        <div className='icon cursor-pointer'>
          <AiOutlineUser size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
/*import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import "./navbar.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
    <div className='navbar-container'>
      <div className='menu-icon'>
        <AiOutlineMenu size={30} />
        <span>electro</span>
      </div>
        <ul className={nav ? 'dropdown-menu' : 'hidden'}>
          <li>Value of the Day</li>
          <li>Top 100 Offers</li>
          <li>Computers and Accessories
            <ul className='sub-menu'>
              <li>Printers</li>
              <li>Laptop</li>
              <li>Desktop</li>
              <li>Accessories</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className='icons'>
      <div className='icon cursor-pointer'>
        <AiOutlineSearch size={30} />
      </div>
      <div className='icon cursor-pointer'>
        <AiOutlineShoppingCart size={30} />
      </div>
      <div className='icon cursor-pointer'>
        <AiOutlineUser size={30} />
      </div>
    </div>
      </>
    
  );
};

export default Navbar;*/
