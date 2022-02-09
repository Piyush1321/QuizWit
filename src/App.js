import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';

import logo from './logo.svg';
import './App.css';
import './css/Input.css';
import Home from './components/Home';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';
import CookieDialog from './components/util/CookieDialog';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />} />          
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
        <Footer />
        <CookieDialog />
      </Router>
    </>
  );
}

export default App;
