import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';

function App() {
  useEffect(() => {
      // $(window).on("scroll", function() {
      //     if($(window).scrollTop() > 50) {
      //         $("#main-header").addClass("main-header-bg");
      //     } else {
      //        $("#main-header").removeClass("main-header-bg");
      //     }
      // });
      // if($(window).scrollTop() > 50) {
      //     $("#main-header").addClass("main-header-bg");
      // } else {
      //    $("#main-header").removeClass("main-header-bg");
      // }
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
