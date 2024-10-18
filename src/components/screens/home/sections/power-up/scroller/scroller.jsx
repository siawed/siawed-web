import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./scroller.module.scss";

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  const cards = [
    {
      id: "adkn",
      head: "Foundation & Vision Building",
      points: [
        "Brand Vision ​Workshop: Help them ​define their business ​vision, mission, and ​values through ​interactive sessions.",
        "Personal Mentorship: ​Pair each new ​entrepreneur with a ​mentor—a successful ​woman entrepreneur ​from SIAWED—who ​will guide them ​throughout the six-​month journey.",
        "Networking Kick-off: ​Introduce them to ​fellow entrepreneurs ​and potential ​collaborators, ​creating a supportive ​network early on.",
      ],
    },
    {
      id: "adkn",
      head: "Foundation & Vision Building",
      points: [
        "Brand Vision ​Workshop: Help them ​define their business ​vision, mission, and ​values through ​interactive sessions.",
        "Personal Mentorship: ​Pair each new ​entrepreneur with a ​mentor—a successful ​woman entrepreneur ​from SIAWED—who ​will guide them ​throughout the six-​month journey.",
        "Networking Kick-off: ​Introduce them to ​fellow entrepreneurs ​and potential ​collaborators, ​creating a supportive ​network early on.",
      ],
    },
    {
      id: "adkn",
      head: "Foundation & Vision Building",
      points: [
        "Brand Vision ​Workshop: Help them ​define their business ​vision, mission, and ​values through ​interactive sessions.",
        "Personal Mentorship: ​Pair each new ​entrepreneur with a ​mentor—a successful ​woman entrepreneur ​from SIAWED—who ​will guide them ​throughout the six-​month journey.",
        "Networking Kick-off: ​Introduce them to ​fellow entrepreneurs ​and potential ​collaborators, ​creating a supportive ​network early on.",
      ],
    },
    {
      id: "adkn",
      head: "Foundation & Vision Building",
      points: [
        "Brand Vision ​Workshop: Help them ​define their business ​vision, mission, and ​values through ​interactive sessions.",
        "Personal Mentorship: ​Pair each new ​entrepreneur with a ​mentor—a successful ​woman entrepreneur ​from SIAWED—who ​will guide them ​throughout the six-​month journey.",
        "Networking Kick-off: ​Introduce them to ​fellow entrepreneurs ​and potential ​collaborators, ​creating a supportive ​network early on.",
      ],
    },
    {
      id: "adkn",
      head: "Foundation & Vision Building",
      points: [
        "Brand Vision ​Workshop: Help them ​define their business ​vision, mission, and ​values through ​interactive sessions.",
        "Personal Mentorship: ​Pair each new ​entrepreneur with a ​mentor—a successful ​woman entrepreneur ​from SIAWED—who ​will guide them ​throughout the six-​month journey.",
        "Networking Kick-off: ​Introduce them to ​fellow entrepreneurs ​and potential ​collaborators, ​creating a supportive ​network early on.",
      ],
    },
    {
      id: "adkn",
      head: "Foundation & Vision Building",
      points: [
        "Brand Vision ​Workshop: Help them ​define their business ​vision, mission, and ​values through ​interactive sessions.",
        "Personal Mentorship: ​Pair each new ​entrepreneur with a ​mentor—a successful ​woman entrepreneur ​from SIAWED—who ​will guide them ​throughout the six-​month journey.",
        "Networking Kick-off: ​Introduce them to ​fellow entrepreneurs ​and potential ​collaborators, ​creating a supportive ​network early on.",
      ],
    },
    {
      id: "adkn",
      head: "Foundation & Vision Building",
      points: [
        "Brand Vision ​Workshop: Help them ​define their business ​vision, mission, and ​values through ​interactive sessions.",
        "Personal Mentorship: ​Pair each new ​entrepreneur with a ​mentor—a successful ​woman entrepreneur ​from SIAWED—who ​will guide them ​throughout the six-​month journey.",
        "Networking Kick-off: ​Introduce them to ​fellow entrepreneurs ​and potential ​collaborators, ​creating a supportive ​network early on.",
      ],
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        data-aos="fade-up"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {cards.map((card, ci) => {
          return (
            <SwiperSlide key={`card_${ci}`}>
              <div className={styles.card}>
                <h3>{card.head}</h3>
                <ul>
                  {card.points.map((point, pi) => {
                    return (
                      <li key={`point_${pi}`}>
                        <p>{point}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
