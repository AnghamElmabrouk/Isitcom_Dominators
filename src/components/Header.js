import React from 'react';
import './css/HeaderTop.css';

const Header = () => {
  return (
    <div  className="header-block">
      <h1 className="header-title">Issues Hunt</h1>
      <div className="contacts-wrapper">
        Created By <a
          rel="noopener noreferrer"
          className="website-link"
          target="_blank"
          href="https://www.nuitdelinfo.com/inscription/equipes/289">
          ISITCOM_Dominators
        </a>
        
      </div>
    </div>
  );
}

export default Header;
