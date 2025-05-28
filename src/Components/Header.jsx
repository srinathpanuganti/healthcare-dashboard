import { faBars, faBell, faSearch, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        <div className='col-1'>
            <button className="menu-icon">
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <h1 className="logo"><span>Health</span>care.</h1>
        </div>
        <div className='col-2'>
            <input type="text" placeholder="Search..." className="search-bar"/>
        </div>
        <div className='col-3'>
            <button className="search-icon">
                <FontAwesomeIcon icon={faSearch}/>
            </button>
            <div className="user-profile"><FontAwesomeIcon icon={faUserCircle}/></div>  
            <button>+</button>  
        </div>
    </header>
  )
}

export default Header