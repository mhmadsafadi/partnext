import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import hero from '../../assets/hero.png'
import DownloadApp from '../DownloadApp/DownloadApp'
import './hero.css'

import { motion } from 'framer-motion'
import { useScroll } from '../useScroll'
import { TextAnimation, heroImageAnimation } from '../../Animation'

const Hero = () => {

  const [element, controls] = useScroll();

  return (
    <section className='hero' ref={element}>
      <Container>
        <Row>
          <Col lg='6'>
            <motion.div className='hero-text' variants={TextAnimation} animate={controls} transition={{duration:0.3, delay:0.3, type:'tween'}}>
              <p className='title'>Find your next business partner!</p>
              <p className='text mt-4 mb-5'>People do business with people.
                The partnext app was created to implement business ideas and incorporate the future partner.
              </p>
              <DownloadApp/>
            </motion.div>
          </Col>
          <Col lg='6'>
            <motion.div variants={heroImageAnimation} animate={controls} transition={{duration:0.5, delay:0.5, type:'tween'}}>
              <img className='d-none d-lg-block' src={hero} alt="hero"/>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
    )
}

export default Hero