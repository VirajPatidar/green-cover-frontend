import Test from './components/test'
import Navbar from './components/navbar'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from './components/notFound';
import Home from './components/home';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/test" element={<Test />} exact />

                {/* <Route path="/path" element={component} exact /> */}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
