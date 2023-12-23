import React from 'react';
import Header from '../basic/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import About from '../home/about/About';
import Footer from '../basic/footer/Footer';
import Listings from '../home/update/Update';

const Page = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/update' element={<Listings />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default Page;
