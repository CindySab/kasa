import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Logements from '../components/Logements/Logements';
import imgBannerHome from '../assets/Images/bannerHome.png';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner
                image={imgBannerHome}
                text="Chez vous, partout et ailleurs"
            />
            <Logements />
            <Footer />
        </div>
    );
};

export default Home;
