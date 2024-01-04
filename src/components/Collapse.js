import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Collapse = () => {
    const [collapse, setData] = useState([]);

    useEffect(() => {
        axios.get('/collapse.json').then((resp) => setData(resp.data));
    }, []);

    return (
        <div className="collapse">
            <ul>
                {collapse.map((collapseAbout, index) => (
                    <li key={index}>
                        <div className="title">
                            <h2>{collapseAbout.aboutTitle}</h2>
                            <img src="/vectorBas.svg" alt="" />
                        </div>
                        <p>{collapseAbout.aboutText}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Collapse;
