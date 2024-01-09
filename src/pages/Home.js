import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BannerHome from '../components/Banner/BannerHome';
import Logements from '../components/Logements/Logements';

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
