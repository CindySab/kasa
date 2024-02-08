import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Carroussel from '../components/Carroussel/Carroussel';
import InfosLogement from '../components/InfosLogement/InfosLogement';
import Error404 from './Error404/Error404';

/*
 * @brief : Composant Accommodation qui représente la page d'un logement particulier.
 * @component
 * @returns {JSX.Element} Le composant Accommodation rendu.
 *
 * @brief : Vérifie si l'id dans l'URL correspond à un id du tableau de données
 * @brief : Redirige vers le composant Error404 si non valide.
 * @function isValidId
 */

const Accommodation = () => {
    const { id } = useParams();
    const [data, setData] = useState([id]);
    const [isValidId, setIsValidId] = useState(true);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;

        axios
            .get('/data.json')
            .then((resp) => {
                if (isMounted) {
                    setData(resp.data);
                    setIsDataLoaded(true);
                }
            })
            .catch((error) => {
                if (isMounted) {
                    console.error(
                        'Erreur lors de la récupération des données :',
                        error
                    );
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (isDataLoaded) {
            const isValidId = data.some((item) => item.id === id);
            setIsValidId(isValidId);
        }
    }, [isDataLoaded, data, id]);

    if (!isValidId) {
        return (
            <div>
                <Error404 />
            </div>
        );
    }

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
