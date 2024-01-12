import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Carroussel = ({ data }) => {
    const { id } = useParams();
    const [currentSlide, setCurrentSlide] = useState(0);

    const filteredLogements = data.filter((logement) => logement.id === id);

    if (
        filteredLogements.length === 0 ||
        !filteredLogements[0].pictures ||
        !filteredLogements[0].pictures.length
    ) {
        return;
    }

    const totalSlides = filteredLogements[0].pictures.length;
    const showCounterButtons = totalSlides > 1;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        );
    };

    return (
        <div className="carrouselContainer">
            {showCounterButtons && (
                <div className="carrouselCounter">
                    {currentSlide + 1}/{totalSlides}
                </div>
            )}
            <div key={filteredLogements[0].id} className="carrouselSlide">
                {showCounterButtons && (
                    <button
                        className="carrouselButton carrouselPrev"
                        onClick={prevSlide}
                        alt="Précédente"
                    ></button>
                )}
                <div className="carrouselImageContainer">
                    <img
                        src={filteredLogements[0].pictures[currentSlide]}
                        alt=""
                        className="carrouselImage"
                    />
                </div>
                {showCounterButtons && (
                    <button
                        className="carrouselButton carrouselNext"
                        onClick={nextSlide}
                    ></button>
                )}
            </div>
        </div>
    );
};

export default Carroussel;
