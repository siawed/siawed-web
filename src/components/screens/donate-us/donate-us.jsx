import React from "react";
import styles from "./donate-us.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import { Check, X } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";

const SponsorCard = ({ data }) => {
  const { id, title, price, points, isHighlight } = data;
  return (
    <Col xs={12} md={4}>
      <div
        className={`${styles.SponsorCard} ${
          isHighlight ? styles.highlight : ""
        }`}
      >
        <h3>{title}</h3>
        <p className={styles.price}>{price}</p>
        <div className={styles.points}>
          {points.map((point, idx) => {
            return (
              <p
                key={`point_${id}_${idx}`}
                className={`${styles.point} ${
                  !point.includes ? styles.disabled : ""
                }`}
              >
                {point.includes ? <Check /> : <X />} {point.point}
              </p>
            );
          })}
        </div>
        <div className={styles.btns}>
          <CustomButton
            href={`/account/donate?id=${id}`}
            variant={isHighlight ? 2 : 1}
          >
            Sponsor Now
          </CustomButton>
        </div>
      </div>
    </Col>
  );
};

const DonateUsScreen = () => {
  const cards = [
    {
      id: "supporting",
      title: "Supporting Sponsor",
      price: "₹5000",

      points: [
        {
          point: "Includes your company name & logo in all posters & fliers",
          includes: true,
        },
        {
          point: " 80 G Certificate",
          includes: true,
        },
        {
          point: "Honorary certificate",
          includes: true,
        },
        {
          point: "Advertisement in digital Newsletter - SHRISTI",
          includes: false,
        },
        {
          point:
            "Includes your Company name & Logo in all Workshops & Webinars.",
          includes: false,
        },
        {
          point: "A short video about Company will be published in all events",
          includes: false,
        },
        {
          point: "Recognition in the event",
          includes: false,
        },
        {
          point: "Offers to share about your company",
          includes: false,
        },
      ],
    },
    {
      id: "title",
      title: "Title Sponsor",
      price: "₹15,000",
      isHighlight: true,
      points: [
        {
          point: "Includes your company name & logo in all posters & fliers",
          includes: true,
        },
        {
          point: " 80 G Certificate",
          includes: true,
        },
        {
          point: "Honorary certificate",
          includes: true,
        },
        {
          point: "Advertisement in digital Newsletter - SHRISTI",
          includes: true,
        },
        {
          point:
            "Includes your Company name & Logo in all Workshops & Webinars.",
          includes: true,
        },
        {
          point: "A short video about Company will be published in all events",
          includes: true,
        },
        {
          point: "Recognition in the event",
          includes: true,
        },
        {
          point: "Offers to share about your company",
          includes: true,
        },
      ],
    },
    {
      id: "presenting",
      title: "Presenting Sponsor",
      price: "₹10,000",

      points: [
        {
          point: "Includes your company name & logo in all posters & fliers",
          includes: true,
        },
        {
          point: " 80 G Certificate",
          includes: true,
        },
        {
          point: "Honorary certificate",
          includes: true,
        },
        {
          point: "Advertisement in digital Newsletter - SHRISTI",
          includes: true,
        },
        {
          point:
            "Includes your Company name & Logo in all Workshops & Webinars.",
          includes: true,
        },
        {
          point: "A short video about Company will be published in all events",
          includes: false,
        },
        {
          point: "Recognition in the event",
          includes: false,
        },
        {
          point: "Offers to share about your company",
          includes: false,
        },
      ],
    },
  ];

  return (
    <main className={styles.DonateUsScreen}>
      <div className={styles.banner}>
        <h1>Donate us</h1>

        <h3>
          Service to others is the rent you pay for your room here on earth.
        </h3>
      </div>
      <div className={styles.cont}>
        <CustomContainer variant={1}>
          <div className={styles.head}>
            <h5>Help Us Grow with a</h5>
            <h2>Monthly Sponsorship</h2>
            <hr />
            <br />
            <br />
          </div>
        </CustomContainer>
        <CustomContainer variant={2}>
          <br />
          <br />
          <div className={styles.cardWrap}>
            <Row>
              {cards.map((card) => {
                return <SponsorCard key={card.id} data={card} />;
              })}
            </Row>
          </div>
          <br />
          <br />
        </CustomContainer>
      </div>
    </main>
  );
};

export default DonateUsScreen;
