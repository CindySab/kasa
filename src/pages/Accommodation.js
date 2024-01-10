import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Carroussel from '../components/Carroussel/Carroussel';
import InfosLogement from '../components/InfosLogement/InfosLogement';

const Accommodation = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data.json').then((resp) => setData(resp.data));
    }, []);

    return (
        <div>
            <Header />
            <Carroussel data={data} />
            <InfosLogement data={data} />
            <Footer />
        </div>
    );
};

export default Accommodation;
