import { useState } from 'react'
import {
  createBrowserRouter,
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

function App() {

  return (
    <div>
      <Nav/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </BrowserRouter>


    <Home/>



    <ContactPage/>

      <AboutMe/>


      <Footer />
    </div>
  )
}

export default App
