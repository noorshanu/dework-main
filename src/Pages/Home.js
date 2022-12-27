import React from 'react'
import About from '../Components/About/About'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Features from '../Components/Features/Feauters'
import Find from '../Components/Find/Find'
import Footer from '../Components/Footer/Footer'
import WhyUs from '../Components/WhyUs/WhyUs'
import Tokenomic from 'Components/Token/Tokenomic'
import Raod from 'Components/Roadmap/Raod'
import PartnersMob from 'Components/Partners/PartnersMob'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <About/>
   
    <Find/>
    <WhyUs/>
    <Tokenomic/>
    <Raod/>
    <PartnersMob/>
    
    <Footer/>
    </>
  )
}

export default Home