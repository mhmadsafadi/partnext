import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./phone.css";
import appImg from "../../assets/app.png";
import logo from '../../assets/logo.png'

import { Autoplay } from "swiper";

const Phone = () => {
  return (
    <div className="mobile">
      <div className="screen">
        <Swiper
          slidesPerView={1}
          spaceBetween= {0}
          pagination={false}
          navigation={false}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >

          <SwiperSlide>
            <div className="title">
              why Partnext ?
            </div>
            <div className="subtitle">
              Subtitle
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <img src={appImg} alt="" />
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. 
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="title">
              The App
            </div>
            <div className="subtitle">
              Subtitle
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={logo} alt="" />
            <div className="subtitle">
              Subtitle
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>




        <div className="mobile-bar d-flex justify-content-between align-items-center">
          <div>9:10</div>
          <div className="d-flex gap-1">
            <i className="bi bi-reception-3"></i>
            <i className="bi bi-wifi"></i>
            <i className="bi bi-battery-half"></i>
          </div>
        </div>
        <div className="bottom-bar d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column link active">
            <i className="bi bi-house-fill"></i>
            <span>Home</span>
          </div>
          <div className="d-flex flex-column link">
            <i className="bi bi-chat-left-text-fill"></i>
            <span>Chat</span>
          </div>
          <div className="d-flex flex-column link">
            <i className="bi bi-award-fill"></i>
            <span>Award</span>
          </div>
          <div className="d-flex flex-column link">
            <i className="bi bi-person-fill"></i>
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
