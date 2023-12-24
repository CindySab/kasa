import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Accommodation from './pages/Accommodation';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Accommodation/:id" element={<Accommodation />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
