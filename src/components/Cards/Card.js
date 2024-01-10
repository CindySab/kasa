import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ logement }) => {
    return (
        <NavLink className="navLogement" to={`/Accommodation/${logement.id}`}>
            <li className="card">
                <div className="infos">
                    <img src={logement.cover} alt={logement.title} />
                    <p>{logement.title}</p>
                </div>
            </li>
        </NavLink>
    );
};

export default Card;
