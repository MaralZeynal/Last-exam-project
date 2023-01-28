import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

import { Navigation } from "swiper";
import "swiper/css/bundle";

const Firstsection = () => {
  return (
      <div className="firstSection">
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="imgBox">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg"
                  alt=""
                  className="swiperImg"
                />
                <div className="textBox">
                  <p>Floral</p>
                  <h1>Excellent bouquets for you</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg"
                  alt=""
                  className="swiperImg"
                />
                <div className="textBox">
                  <p>Floral</p>
                  <h1>Excellent bouquets for you</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
                  alt=""
                  className="swiperImg"
                />
                <div className="textBox">
                  <p>Fixed-Height Slider</p>
                  <h1>Excellent bouquets for you</h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
  );
};

export default Firstsection;
