import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./components/misc/Navbar";
import Home from "./components/home/Home"

function Router() {
    return <BrowserRouter>

        <Navbar/>
        <Routes>
            <Route path="/login" element={<p>login</p>} />

            <Route path="/register" element={<p>register</p>} />

            <Route exact path="/" element={<Home/>} />
        </Routes>
    
    </BrowserRouter>
}

export default Router;