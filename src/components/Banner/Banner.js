import React from 'react';

const Banner = ({ image, text }) => {
    return (
        <div className="banner">
            <p>{text}</p>
            <img src={image} alt="Bannière" />
        </div>
    );
};

export default Banner;
