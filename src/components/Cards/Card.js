import React from 'react';

const Card = ({ logement }) => {
    return (
        <li className="card">
            <div className="infos">
                <img src={logement.cover} alt={logement.title} />
                <p>{logement.title}</p>
            </div>
        </li>
    );
};

export default Card;
