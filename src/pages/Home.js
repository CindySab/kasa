import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerHome from '../components/BannerHome';
import Logements from '../components/Logements';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <BannerHome />
            <Logements />
            <Footer />
        </div>
    );
};

export default Home;
