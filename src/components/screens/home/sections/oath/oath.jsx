import React from "react";
import styles from "./oath.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const OathSection = () => {
  return (
    <section className={styles.OathSection}>
      <CustomContainer variant={2}>
        <h2 data-aos="fade-up">The Oath</h2>
        <p data-aos="fade-left">
          As a member of SIAWED, I solemnly commit to always strive for the
          success and well-being of my fellow ​entrepreneurs.
        </p>
        <p data-aos="fade-right">
          I will uphold the vision and values of SIAWED with the true spirit of
          entrepreneurship.
        </p>
        <p data-aos="fade-left">
          I pledge to conduct myself ethically in all my endeavors and show
          consideration towards everyone.
        </p>
        <p data-aos="fade-right">
          I vow to motivate, encourage, promote, and empower my fellow
          entrepreneurs to the best of my abilities.
        </p>
      </CustomContainer>
    </section>
  );
};
export default OathSection;
