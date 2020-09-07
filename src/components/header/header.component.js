import React from 'react';
import logo from '../../logo.png';
import '../../styles/header.scss';

function Header() {
  return (
    <div className="header">
      <div className="main-wrapper">
        <img src={logo}
             className="logo"
             alt="bluestacks"/>
      </div>
    </div>
  )
}

export default Header;