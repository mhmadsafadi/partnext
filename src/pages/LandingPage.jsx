import React from 'react'
import About from '../components/About/About'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import TalkToUs from '../components/TalkToUs/TalkToUs'
import TheApp from '../components/TheApp/TheApp'
import Yellow from '../components/Yellow/Yellow'

import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <motion.div className='app' initial='hidden' animate='show'>
      <Header/>
      <Hero/>
      <TheApp/>
      <Features/>
      <Yellow/>
      <About/>
      <TalkToUs/>
      <Footer/>
      <ScrollToTop/>
    </motion.div>
  )
}

export default LandingPage