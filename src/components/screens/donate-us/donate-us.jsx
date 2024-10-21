import React from "react";
import styles from "./donate-us.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import { Check, X } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";
import DONATION_PLANS from "@/constants/donation-palns";

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
        <p className={styles.price}>₹{price}</p>
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
  const cards = DONATION_PLANS;

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
