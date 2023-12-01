import { useState } from 'react'
import HeroImage from './components/HeroImage'
import Nav from './components/Nav'
import LongText from './components/LongText'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import CommunityModule from './components/CommunityModule'
import WhosOnMagnet from './components/WhosOnMagnet'
import Footer from './components/Footer'
import AboutMe from'./components/AboutMe'
import ContactWall from './components/ContactWall'

function App() {

  return (
    <div>
      <Nav/>
      <HeroImage />
      <LongText />
      <Testimonials/>
      <CommunityModule />
      <WhosOnMagnet/>



      <ContactForm/>
      <ContactWall/>

      <AboutMe/>


      <Footer />
    </div>
  )
}

export default App
