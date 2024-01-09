import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BannerAbout from '../components/Banner/BannerAbout';
import Collapse from '../components/Collapse/Collapse';

const About = () => {
    return (
        <div>
            <Header />
            <BannerAbout />
            <Collapse />
            <Footer />
        </div>
    );
};

export default About;
