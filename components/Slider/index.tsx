"use client";

import React from "react";
// Static data
import { data } from "./static";
// Swiper-slider
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
SwiperCore.use([Pagination, A11y, Autoplay]);
import { setting } from "./setting-slider";
// Swiper-slider -- styles
import "swiper/css";
import "swiper/css/pagination";
// Styles
import styles from "./slider.module.scss";

const Slider: React.FC = () => {
  return (
    <section className={styles.slider__container}>
      <Swiper className={styles.slider} {...setting}>
        {data.map(({ title, desc }, i) => (
          <SwiperSlide key={`slide-${i + 1}`} className={styles.slide}>
            <h2 className={styles.slide__title}>
              <span>{title.top}</span>
              <span>{title.bottom}</span>
            </h2>
            <p className={styles.slide__desc}>
              <strong>{desc.top}</strong>
              <span>{desc.bottom}</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.slider__pagination} />
    </section>
  );
};

export default Slider;
