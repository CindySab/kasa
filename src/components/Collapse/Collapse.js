import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Collapse = () => {
    const [collapse, setData] = useState([]);

    useEffect(() => {
        axios.get('/collapse.json').then((resp) => setData(resp.data));
    }, []);

    const [selected, setSelected] = useState([]);

    const toggle = (index) => {
        selected.includes(index)
            ? setSelected(selected.filter((item) => item !== index))
            : setSelected([...selected, index]);
    };

    return (
        <div className="collapse">
            <ul>
                {collapse.map((collapseAbout, index) => (
                    <li key={index}>
                        <div className="title">
                            <h2>{collapseAbout.aboutTitle}</h2>
                            <img
                                src="/vectorBas.svg"
                                alt="Flèche vers le bas"
                                onClick={() => toggle(index)}
                                className={
                                    selected.includes(index)
                                        ? 'arrowDown'
                                        : 'arrowUp'
                                }
                            />
                        </div>
                        <div
                            className={
                                selected.includes(index)
                                    ? 'showInfos'
                                    : 'hiddenInfos'
                            }
                        >
                            <p>{collapseAbout.aboutText}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Collapse;
