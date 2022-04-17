import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from '../useScroll'
import { appTextAnimation, appImageAnimation } from '../../Animation'
import "./the-app.css";

import person1 from "../../assets/person-1.png";
import person2 from "../../assets/person-2.png";
import person3 from "../../assets/person-3.png";
import person4 from "../../assets/person-4.png";
import person5 from "../../assets/person-5.png";
import person6 from "../../assets/person-6.png";


const ContentTow = () => {

    const [element, controls] = useScroll();

  return (
    <div>
        <div className="content-two mb-5" ref={element}>
          <motion.div variants={appTextAnimation} animate={controls} transition={{delay:0.3, stiffness:300}}>
            <p className="text mb-5 mt-5">
              By giving answers to these questions and many more possible
              questions, you will be able to find the perfect business partner you
              need, the one that can fill the missing part in your business.
            </p>
            <p className="text mb-5 mt-5">
              Even if you don’t have a business or even an idea, surely there is
              someone out there that is looking for a person just like you. Find
              who want to connect with you, chat with them and go on a real or
              online business meeting. We would love to hear about the results of
              the meeting.
            </p>
          </motion.div>

          <motion.div variants={appImageAnimation} animate={controls} transition={{delay:0.2, stiffness:1000}}>
            <img className="p-1" src={person1} alt="" />
            <img className="p-2" src={person2} alt="" />
            <img className="p-3" src={person3} alt="" />
            <img className="p-4" src={person4} alt="" />
            <img className="p-5" src={person5} alt="" />
            <img className="p-6" src={person6} alt="" />
          </motion.div>
        </div>
    </div>
  )
}

export default ContentTow