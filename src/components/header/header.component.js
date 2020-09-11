import React from 'react';
// import logo from '../../logo.png';
import '../../styles/header.scss';
import SwitchLanguage from '../translator/switchLanguage.component';

function Header() {
  return (
    <div className="header">
      <div className="main-wrapper">
        <img src="./bluestacks/logo.png"
             className="logo"
             alt="bluestacks"/>
      </div>

      <SwitchLanguage/>
    </div>
  )
}

export default Header;