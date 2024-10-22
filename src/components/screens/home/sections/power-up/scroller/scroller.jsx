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
      id: "sdvmskdnv",
      head: "Brand Identity & ​Kits Creation",
      points: [
        "Branding Masterclass: ​Provide training on ​creating a brand identity​—logo, tagline, color ​palette, and voice.",
        "DIY Brand Kit ​Development: Offer ​resources or partnerships ​with designers to create ​basic brand kits (business ​cards, website templates, ​social media branding, ​etc.).",
        "Peer Feedback Session: ​Host a group session ​where new entrepreneurs ​present their brand ideas ​and get constructive ​feedback from mentors ​and peers.",
      ],
    },
    {
      id: "amlcmadl",
      head: "Financing & ​Budget Planning",
      points: [
        "Finance 101: A crash ​course on financing ​options for women ​entrepreneurs—​covering loans, grants, ​crowdfunding, and ​investors.",
        "Business Plan ​Development: Guide ​them in writing a ​business plan that ​includes a financial ​forecast and budget.",
        "Pitching Practice: Set ​up mock investor pitch ​sessions with feedback ​from seasoned ​entrepreneurs, ​preparing them for ​real-world funding ​opportunities.",
      ],
    },
    {
      id: "pdvpskdsd",
      head: "Skill Development ​& Hands-On ​Training",
      points: [
        "Workshops on Key ​Skills: Organize skill-​building sessions in ​areas such as digital ​marketing, social media ​strategy, negotiation, ​leadership, and product ​development.",
        "Real-Time Project ​Collaboration: Create ​opportunities to work ​on live projects or ​collaborations with ​other entrepreneurs to ​gain practical ​experience.",
        "One-on-One Coaching: ​Focus on specific ​challenges each ​entrepreneur is facing ​with personalized ​coaching from mentors.",
      ],
    },
    {
      id: "advmado",
      head: "Marketing & ​Scaling Strategy",
      points: [
        "Digital Marketing ​Bootcamp: Equip them ​with digital tools to ​build and manage their ​online presence—SEO, ​social media ads, ​content marketing, etc.",
        "Scaling Strategies: ​Teach them how to ​scale their business, ​focusing on product or ​service expansion, team ​growth, and building a ​customer base.",
        "Networking with ​Experts: Bring in guest ​speakers—successful ​women in various ​industries—who can ​offer insights on scaling ​and sustainability.",
      ],
    },
    {
      id: "adpvkapd",
      head: "Launch, Growth, ​and Review",
      points: [
        "Product/Service ​Launch: Assist them in ​launching their product ​or service with a ​marketing push from ​SIAWED’s network.",
        "Progress Review: ​Conduct a 360-degree ​review with mentors to ​assess their growth, ​challenges, and future ​goals.",
        "Celebratory Showcase ​Event: Host an event ​where new ​entrepreneurs can ​present their brand, ​product, or service to ​SIAWED members, ​potential clients, and ​investors.",
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
