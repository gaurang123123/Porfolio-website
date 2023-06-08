
import './App.css';import React,{ useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Aboutsection from './components/Aboutsection';
import Certificationsection from './components/Certificationsection';
import Myworks from './components/Myworks';
import Contact from './components/Contact';
import Headercomponent from './components/Headercomponent';
import Appbar from './components/Appbar';


function App() {

  
  return (
    <>
    <Navbar/>
    <Appbar/>
    <Headercomponent/>
    <Aboutsection/>
    <Myworks/>
    <Certificationsection/>
    <Contact/>
  <Footer/>
    </>

 
  );
}

export default App;
