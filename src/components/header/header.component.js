import React from 'react';
import '../../styles/header.scss';
import SwitchLanguage from '../translator/switchLanguage.component';

function Header() {
  return (
    <div className="header">
      <div className="main-wrapper">
        <img src={`${process.env.PUBLIC_URL}/logo.png`}
             className="logo"
             alt="bluestacks"/>
      </div>

      <SwitchLanguage/>
    </div>
  )
}

export default Header;