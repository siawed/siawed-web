import React from "react";
import styles from "./founder.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const FounderSection = () => {
  return (
    <section className={styles.FounderSection}>
      <CustomContainer>
        <div className={styles.container}>
          <div className={styles.head}>
            <h1 data-aos="fade-right">About Us</h1>
            <p data-aos="fade-left">
              The Southern Industrial Academy for Women Entrepreneurs
              Development (SIAWED), founded in 2013 in Chennai, is a ​dynamic
              NGO with a mission to economically empower women from all walks of
              life, regardless of socio-economic barriers. ​We bring together
              women from diverse backgrounds, fostering a collaborative
              environment where they can develop their ​skills and knowledge for
              mutual growth and collective success.
            </p>
          </div>
          <div className={styles.content}>
            <Row>
              <Col xs={12} md={4}>
                <div className={styles.founderImg}>
                  <Image
                    src="/assets/images/siawed-founder.png"
                    fluid
                    alt="siawed-founder"
                    data-aos="zoom-in"
                  />
                </div>
              </Col>
              <Col>
                <div className={styles.right}>
                  <Image
                    src="/assets/images/flower-vector.png"
                    width={200}
                    alt="flower"
                    className={styles.flower}
                  />
                  <div className={styles.text}>
                    <h2 data-aos="fade-up">MEET OUR FOUNDER</h2>
                    <p className={styles.name} data-aos="fade-left">Ms. T. Vanadhi Devi</p>
                    <br />
                    <p data-aos="fade-up">
                      The President of SIAWED, an MBA graduate from ​Bharathiar
                      University, has successfully forged strong ​connections
                      with corporate giants, training institutions,
                      ​entrepreneurs, innovators, and academicians. Leveraging
                      ​this powerful network, she is committed to empowering
                      ​women entrepreneurs through initiatives like WENBA, an
                      ​e-commerce portal dedicated to showcasing women-led
                      ​businesses and indigenous crafts. Her mission is to drive
                      ​the vision of a brighter tomorrow, building a
                      self-reliant ​and thriving nation.
                    </p>
                    <Image
                      src="/assets/images/divider-vector.png"
                      width={250}
                      alt="divider"
                      className={styles.divider}
                      data-aos="flip-up"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default FounderSection;
