import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-dom";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router";




import SustainableCalendar from "./components/card_events";
import NGOsConnect from "./components/card_NGOs_connect";
import WebinarHolder from "./components/card_webinars";
import DonateHere from "./components/card_donate";



import AboutPage from "./components/header_aboutus";
import PartnerWith from "./components/header_partnerwithus";
import ExploreMorePage from "./components/header_explorewithus";
import AuthPage from "./components/header_signin";

// NGOs import 
import PrivacyPolicy from "./components/other_privacypolicy";
import FAQsPage from "./components/other_faqs";
import TermsOfServicePage from "./components/other_termoservice";

// partner with us
import ProjectsPage from "./components/other_project";

//explore more
import SupportPage from "./components/other_support";
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


                <Route path="/AboutUs" element={<AboutPage></AboutPage>}></Route>
                <Route path="/PartnerWithUs" element={<PartnerWith></PartnerWith>}></Route>
                <Route path="/ExploreMore" element={<ExploreMorePage></ExploreMorePage>}></Route>
                <Route path="/SignIn" element={<AuthPage></AuthPage>}></Route>


                <Route path="/PrivacyPolicy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
                <Route path="/FAQs" element={<FAQsPage></FAQsPage>}></Route>
                <Route path="/TermsOfService" element={<TermsOfServicePage></TermsOfServicePage>}></Route>

                <Route path="/Projects" element={<ProjectsPage></ProjectsPage>}></Route>

                <Route path="/Support" element={<SupportPage></SupportPage>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);