import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/LOGO.png';

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/home">
                <img src={logo} alt="logo de kasa" />
            </Link>
        </div>
    );
};

export default Logo;
