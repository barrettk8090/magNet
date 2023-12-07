import { useState } from 'react'
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Router,
  Link
} from "react-router-dom";
import Home from './components/Home'

import Nav from './components/Nav'
import Footer from './components/Footer'
import AboutMe from'./components/AboutMe'
import ContactPage from './components/ContactPage'
import CommunityPage from './components/CommunityPage';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div>
      
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element ={<CommunityPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/about" element={<AboutMe/>} />
        </Routes>
        <Footer />
        <ScrollToTop/>
      </BrowserRouter>









      
    </div>
  )
}

export default App
