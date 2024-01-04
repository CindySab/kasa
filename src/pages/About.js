import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerAbout from '../components/BannerAbout';
import Collapse from '../components/Collapse';

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
