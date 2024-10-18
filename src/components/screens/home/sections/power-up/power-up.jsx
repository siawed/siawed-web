import React from "react";
import styles from "./power-up.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import Scroller from "./scroller/scroller";
import { Image } from "react-bootstrap";

const PowerUpSection = () => {
  return (
    <section className={styles.PowerUpSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.top}>
            <Image
              src="/assets/images/leaves.png"
              alt="leaves"
              width={150}
              className={styles.img}
            />
            <div>
              <h2 data-aos="fade-right">
                How do we power up
                <br /> your business
              </h2>
              <div className={styles.ol}>
                <h2 data-aos="fade-right">Growth?</h2>
                <p data-aos="fade-left">
                  We&apos;re all about turning dreams into reality! Our
                  organization is here to help ambitious women like you achieve
                  your goals and bring your vision to life. From your first step
                  to every move forward, we&apos;re with you every step of the
                  way as you grow as an entrepreneur. Let&apos;s make success
                  happen together!
                </p>
              </div>
            </div>
          </div>
        <br />
        <br />
        <Scroller />
        </div>
      </CustomContainer>
    </section>
  );
};

export default PowerUpSection;
