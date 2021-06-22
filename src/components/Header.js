import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" height="40"/>
            <h1>Notes App</h1>
        </header>
        );
};

export default Header;
