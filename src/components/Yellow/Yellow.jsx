import React from 'react'
import DownloadApp from '../DownloadApp/DownloadApp'
import "./yellow.css";

import { motion } from 'framer-motion'
import { useScroll } from '../useScroll'
import { TextAnimation } from '../../Animation'
import { Container } from 'react-bootstrap';

const Yellow = () => {

  const [element, controls] = useScroll();

  return (
    <div className='yellow mt-5' ref={element}>
      <Container>
        <motion.div variants={TextAnimation} animate={controls} transition={{delay:0.3, type:'tween'}}>
            <p className='title mb-4'>
                Your next business partner is here! <br/>
                Become a part of your next opportunity!
            </p>
            <DownloadApp/>
        </motion.div>
      </Container>
    </div>
  )
}

export default Yellow