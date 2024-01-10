import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Carroussel = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        axios.get('/data.json').then((resp) => setData(resp.data));
    }, []);

    const filteredLogements = data.filter((logement) => logement.id === id);

    const nextSlide = () => {
        setCurrentSlide(
            (prevSlide) =>
                (prevSlide + 1) % filteredLogements[0].pictures.length
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) =>
                (prevSlide - 1 + filteredLogements[0].pictures.length) %
                filteredLogements[0].pictures.length
        );
    };

    return (
        <div className="carrousel-container">
            {filteredLogements.map((logement) => (
                <div key={logement.id}>
                    <button
                        className="carrousel-button carrousel-prev"
                        onClick={prevSlide}
                        alt="Précédente"
                    ></button>
                    <img
                        src={logement.pictures[currentSlide]}
                        alt=""
                        className="carrousel-image"
                    />
                    <button
                        className="carrousel-button carrousel-next"
                        onClick={nextSlide}
                    ></button>
                </div>
            ))}
        </div>
    );
};

export default Carroussel;
