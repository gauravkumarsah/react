import React from 'react';
import Logo from '../logo.svg';
import './info.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className='logo-container'>
        <span>
          <img src={Logo} alt="" className='img-logo' />
        </span>
        <div className='logo-title'>React Facts</div>
      </div>

      <div className='nav-text'>React Course - Projects 1</div>
    </div>
  );
};

export default Header;
