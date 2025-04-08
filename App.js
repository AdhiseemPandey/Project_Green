import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-dom";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router";



import SustainableCalendar from "./components/card_events";
import NGOsConnect from "./components/card_NGOs_connect";
import WebinarHolder from "./components/card_webinars";
import DonateHere from "./components/card_donate";



// import AboutPage from "./components/header_aboutus";
import PartnerWith from "./components/header_partnerwithus";


function App(){

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Events" element={<SustainableCalendar></SustainableCalendar>}></Route>
                <Route path="/NGOsConnect" element={<NGOsConnect></NGOsConnect>}></Route>
                <Route path="/Webinars" element={<WebinarHolder></WebinarHolder>}></Route>
                <Route path="/DonateHere" element={<DonateHere></DonateHere>}></Route>

                {/* <Route path="/AboutUs" element={<AboutPage></AboutPage>}></Route> */}
                <Route path="/PartnerWithUs" element={<PartnerWith></PartnerWith>}></Route>

                
            </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);