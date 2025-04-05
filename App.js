import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-dom";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router";
import SustainableCalendar from "./components/card_events";
import NGOsConnect from "./components/card_NGOs_connect";
function App(){

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Events" element={<SustainableCalendar></SustainableCalendar>}></Route>
                <Route path="/NGOsConnect" element={<NGOsConnect></NGOsConnect>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);