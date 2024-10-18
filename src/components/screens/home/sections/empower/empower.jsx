import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./empower.module.scss";

const EmpowerSection = () => {
  return (
    <section className={styles.EmpowerSection}>
      <CustomContainer>
        <div>
          <h2 data-aos="fade-up">
            Empowering Women to Achieve <br />
            Global Success
          </h2>
        </div>
        <div>
          <p data-aos="fade-left">
            SIAWED is committed to advancing female empowerment in India and
            across the globe. Through our expertly curated sessions and virtual
            networking events, we aim to inspire and ​empower female
            entrepreneurs by fostering a robust support network. Our platform
            unites influential women changemakers and pioneers from various
            fields, offering rich, ​insightful discussions that promote growth,
            collaboration, and success. Join us in our mission to uplift and
            celebrate women in business.
          </p>
          <br />
          <p data-aos="fade-right">
            SIAWED, we are leading the charge in empowering and supporting
            visionary female entrepreneurs. We host symposiums that focus on
            women’s entrepreneurship and ​empowerment, unlocking the vast
            potential for aspiring women in India and beyond. Through these
            events, we strive to create an environment that accelerates the
            growth and ​success of women in business. Join us in inspiring and
            empowering the next generation of female leaders.
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default EmpowerSection;
