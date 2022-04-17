import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Phone from "../Phone/Phone";
import "./about.css";

import { motion } from 'framer-motion'
import { useScroll } from '../useScroll'
import { TextAnimation, AboutPhoneAnimation } from '../../Animation'

const About = () => {

  const [element, controls] = useScroll();

  return (
    <div id="about" className="about" ref={element}>
      <Container>
        <Row>
          <Col xl="6" lg='12' className="align-self-center">
            <motion.div variants={TextAnimation} animate={controls} transition={{delay:0.4, type:'tween'}}>
              <p className="title">About Us </p>
              <p className="text" style={{lineHeight:'35px'}}>
                Partnext was founded to help raise the number of business
                partnerships in the world. The world is changing, and so is the
                way people meet each other. Swipe right for like, Swipe left for
                dislike - but this time, you choose your next business partner. We
                want to create accessible business opportunities for everyone. We
                believe that many great minds still need to discover themselves,
                and all they need is connections. These connections are the source
                for a healthy and stable business partnership, that can lead to a
                beautiful and exciting result. In Partnext we keep developing and
                renewing the platform, for the mission to our user’s success is
                the first priority. We will do anything for our users to reach
                their goals!
              </p>
            </motion.div>
          </Col>
          <Col className="mobile-col" xl="6" lg='12'>
            <div className="top-circle"/>
            <div className="center-circle"/>
            <motion.div variants={AboutPhoneAnimation} animate={controls} transition={{duration:0.4, delay:0.1, type:'tween'}}>
              <Phone/>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
