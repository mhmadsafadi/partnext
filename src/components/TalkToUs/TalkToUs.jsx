import React from 'react'
import { Container } from 'react-bootstrap'
import Forms from '../Forms/Forms'
import './talk.css'

import { motion } from 'framer-motion'
import { useScroll } from '../useScroll'
import { appTextAnimation, formAnimation } from '../../Animation'

const TalkToUs = () => {

  const [element, controls] = useScroll();

  return (
    <section id='talk' className='talk pb-5' ref={element}>
        <Container>
          <motion.div variants={appTextAnimation} animate={controls} transition={{duration:0.5, delay:0.1, type:'tween'}}>
            <p className='talk-title text-center mb-4'>Talk to us</p>
          </motion.div>

          <motion.div variants={formAnimation} animate={controls} transition={{duration:0.3, delay:0.3, type:'tween'}}>
            <Forms/>
          </motion.div>
        </Container>
    </section>
  )
}

export default TalkToUs