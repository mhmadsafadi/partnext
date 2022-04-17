import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import feature1 from "../../assets/feature-1.png";
import feature2 from "../../assets/feature-2.png";
import feature3 from "../../assets/feature-3.png";
import feature4 from "../../assets/feature-4.png";

import { motion } from 'framer-motion'
import { useScroll } from '../useScroll'
import { featuresAnimation } from '../../Animation'

import "./features.css";

const Features = () => {

    const [element, controls] = useScroll();

    return (
        <section id='features' className='features text-center'>
            <Container ref={element}>
                <motion.div variants={featuresAnimation} animate={controls} transition={{delay:0.2, type:'tween'}}>
                    <p className='title mb-5'>Features</p>
                </motion.div>
                
                <motion.div className='row' variants={featuresAnimation} animate={controls} transition={{duration:0.4, delay:0.4, type:'tween'}}>
                    <Col lg='3' md='6'>
                        <img src={feature1} alt="" />
                        <p className='text my-3'>
                            See who liked your profile and would like to chat with you. 
                        </p>
                    </Col>
                    <Col lg='3' md='6'>
                        <img src={feature2} alt="" />
                        <p className='text my-3'>
                            Choose a location where do you want to find a partner.
                        </p>
                    </Col>
                    <Col lg='3' md='6'>
                        <img src={feature3} alt="" />
                        <p className='text my-3'>
                            Use filters to receive more relevant connections. 
                        </p>
                    </Col>
                    <Col lg='3' md='6'>
                        <img src={feature4} alt="" />
                        <p className='text my-3'>
                            Chat with new people and find who can fill your needs.
                        </p>
                    </Col>
                </motion.div>
            </Container>
        </section>
    )
}

export default Features