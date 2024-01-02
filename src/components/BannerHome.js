import React from 'react';
import imgBannerHome from '../assets/Images/bannerHome.png';

const BannerHome = () => {
    return (
        <div className="bannerHome">
            <img src={imgBannerHome} alt="bannière de la page home" />
        </div>
    );
};

export default BannerHome;
