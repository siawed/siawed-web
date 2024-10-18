import React from "react";
import styles from "./soldiers.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";

const SoldiersSection = () => {
  const images = [
    "/assets/images/soldier (1).jpg",
    "/assets/images/soldier (3).jpg",
    "/assets/images/soldier (2).jpg",
  ];

  return (
    <section className={styles.SoldiersSection}>
      <h2 data-aos="zoom-in">Meet our SIAWED Soldiers!</h2>
      <div className={styles.wrap}>
        <CustomContainer>
          <Row>
            {images.map((img, idx) => {
              return (
                <Col key={`image_${idx}`} xs={6} md={6} lg={4}>
                  <div className={styles.imgCont} data-aos="flip-right">
                    <Image src={img} className={styles.img} alt="img" fluid />
                  </div>
                </Col>
              );
            })}
          </Row>
        </CustomContainer>
      </div>
    </section>
  );
};

export default SoldiersSection;
