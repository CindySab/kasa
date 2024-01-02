import React from 'react';
import imgBannerAbout from '../assets/Images/bannerAbout.png';

const BannerAbout = () => {
    return (
        <div className="bannerAbout">
            <img src={imgBannerAbout} alt="bannière de la page about" />
        </div>
    );
};

export default BannerAbout;
