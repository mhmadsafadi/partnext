import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import appImg from "../../assets/app.png";

import hand from "../../assets/hand.png";
import bag from "../../assets/bag.png";
import global from "../../assets/global.png";
import calender from "../../assets/calender.png";
import light from "../../assets/light.png";

import { motion } from 'framer-motion'
import { useScroll } from '../useScroll'
import { appTextAnimation, appBoxAnimation } from '../../Animation'

import "./the-app.css";
import ContentTow from "./ContentTow";

const TheApp = () => {

  const [element, controls] = useScroll();

  return (
    <section id="app" className="the-app">
      <Container>
        <div className="content py-5" ref={element}>
          <motion.div variants={appTextAnimation} animate={controls} transition={{delay:0.1, stiffness:300}}>
            <p className="title mt-5">The App</p>
            <p className="text my-4">
              Partnext - an app for entrepreneurs and businessmen. Swipe right,
              Swipe left - but this time you choose your next business partner! so
              choose wisely, Create an informative profile about yourself and use
              the necessary filters
            </p>
          </motion.div>

          <motion.div className="row justify-content-evenly gap-3 my-5" variants={appBoxAnimation} animate={controls} transition={{delay:0.3, stiffness:5000}}>
            <Col lg="4">
              <div className="shadow app-box d-flex align-items-center gap-3">
                <div className="bg-icon d-flex align-items-center">
                  <img src={hand} alt="" />
                </div>
                <span className="text">
                  Are you looking for a strategic or active partner?
                </span>
              </div>
            </Col>
            <Col lg="4">
              <div className="shadow app-box d-flex align-items-center gap-3">
                <div className="bg-icon d-flex align-items-center">
                  <img src={calender} alt="" />
                </div>
                <span className="text">
                  Are you looking to cooperate with your future partner
                  temporarily or permanently?
                </span>
              </div>
            </Col>
          </motion.div>

          <motion.div className="row justify-content-between gap-3 my-5" variants={appBoxAnimation} animate={controls} transition={{delay:0.4, stiffness:5000}}>
            <Col lg="4">
              <div className="shadow app-box d-flex align-items-center gap-3">
                <div className="bg-icon d-flex align-items-center">
                  <img src={bag} alt="" />
                </div>
                <span className="text">
                  What experience your business partner should have Choose from
                  any field/industry
                </span>
              </div>
            </Col>
            <Col lg="4">
              <div className="shadow app-box d-flex align-items-center gap-3">
                <div className="bg-icon d-flex align-items-center">
                  <img src={global} alt="" />
                </div>
                <span className="text">
                  Are you expanding and going global? Where in the world you’d
                  like to find a business partner?
                </span>
              </div>
            </Col>
          </motion.div>
          <motion.div className="row justify-content-center mb-5" variants={appBoxAnimation} animate={controls} transition={{delay:0.5, stiffness:5000}}>
            <Col lg="4">
              <div className="shadow app-box d-flex align-items-center gap-3">
                <div className="bg-icon">
                  <img src={light} alt="" />
                </div>
                <span className="text">
                  Are you looking to become a part of a business/startup?
                </span>
              </div>
            </Col>
          </motion.div>
        </div>

        <ContentTow />
        
      </Container>
        <img className="app-img" src={appImg} alt="" />
    </section>
  );
};

export default TheApp;
