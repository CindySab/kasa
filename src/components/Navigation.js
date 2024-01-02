import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? 'navActive' : '')}
                >
                    <li>Accueil</li>
                </NavLink>
                <NavLink
                    to="/About"
                    className={(nav) => (nav.isActive ? 'navActive' : '')}
                >
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
