import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerHome from '../components/BannerHome';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <BannerHome />
            <Footer />
        </div>
    );
};

export default Home;
