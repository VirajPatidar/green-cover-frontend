import Navbar from './components/navbar'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from './components/notFound';
import Home from './components/home';
import Vegetation from './components/vegetation';
import Timelapse from './components/timelapse';
import LandCover from './components/landCover';
import AirQuality from './components/airQuality';
import Volunteer from './components/volunteer';
import Admin from './components/admin';
import Facts from './components/facts';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                
                <Route path="/vegetation" element={<Vegetation />} exact />
                <Route path="/timelapse" element={<Timelapse />} exact />
                <Route path="/landcover" element={<LandCover />} exact />
                <Route path="/airquality" element={<AirQuality />} exact />

                <Route path="/volunteer" element={<Volunteer />} exact />
                <Route path="/admin" element={<Admin />} exact />
                <Route path="/facts" element={<Facts />} exact />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
