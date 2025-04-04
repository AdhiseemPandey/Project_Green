import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-dom";
import Header from "./components/header";
import Blog_creation from "./components/blog_creation";
import Footer from "./components/Footer"; 
import { BrowserRouter, Routes, Route } from "react-router";
function App(){

    return(
        <>
        <Header></Header>
        <Blog_creation></Blog_creation>
        <Footer></Footer>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);