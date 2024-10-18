import React from "react";
import styles from "./dedicated.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const DedicatedSection = () => {
  return (
    <section className={styles.DedicatedSection}>
      <CustomContainer noSmPadding>
        <div className={`${styles.sectionRow} ${styles.row1}`}>
          <div className={styles.img}>
            <Image
              src="/assets/images/ambedkar.jpg"
              alt="two-smiling-female-colleagues"
              fluid
              data-aos="fade-right"
            />
          </div>
          <div className={styles.text}>
            <Image
              src="/assets/images/flower-vector.png"
              alt="flower-vector"
              className={styles.flower}
              width={190}
              data-aos="fade-right"
            />
            <div>
              <h2 data-aos="fade-right">Who We Are?</h2>
              <h3 data-aos="fade-left">
                <blockquote>
                  “I measure the progress of a community by the degree of
                  progress which women have achieved.”
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
                  Dr. B.R.Ambedkar
                </blockquote>
              </h3>
              <br />
              <br />
              <ul>
                <li data-aos="fade-right">
                  <p>
                    It is to have a collective representation for empowering
                    women to achieve greater gender equality and to gain
                    economical self-reliance.
                  </p>
                </li>
                <br />
                <li data-aos="fade-left">
                  <p>
                    We at SIAWED identify a business opportunity, analyze the
                    factors, evaluate the project viability and create a
                    business plan best suited for the aspirants. Our resourceful
                    mentors in different industrial sectors both in India and
                    abroad, play a vital role in project evaluation and
                    execution.
                  </p>
                </li>
              </ul>
              <br />
              <Image
                src="/assets/images/divider-vector.png"
                width={250}
                alt="divider"
                className={styles.divider}
                data-aos="flip-up"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.sectionRow} ${styles.row2}`}>
          <div className={styles.text}>
            <div>
              <h2 data-aos="fade-up">Our Goal</h2>
              <h3 data-aos="fade-down">Vision</h3>
              <hr data-aos="fade-right" />
              <p data-aos="fade-right">
                Women are given a foundation course on basics of
                Entrepreneurship Development ( EDP ) and grouped with similar
                skills. Each group will be headed by a TEAM LEADER responsible
                for training and co ordination of the members as per the
                requisites of Business.
              </p>
              <br />
              <h3 data-aos="fade-down">Mission</h3>
              <hr data-aos="fade-right" />
              <p data-aos="fade-right">
                Our mission is to strengthen the entrepreneurial skills of women
                both in rural and urban regions and empower the girls to choose
                entrepreneurship against employment.
              </p>
              <br />
              <h3 data-aos="fade-down">What We Offer</h3>
              <hr data-aos="fade-right" />
              <p data-aos="fade-right">
                SIAWED offers business consultancy, mentoring, financial
                solutions, compliance of legal and statutory formalities and end
                to end entrepreneurial support including business promotions via
                social media marketing.
              </p>
            </div>
          </div>
          <div className={styles.img}>
            <Image
              src="/assets/images/women-vector.png"
              alt="two-smiling-female-colleagues"
              fluid
              data-aos="fade-left"
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default DedicatedSection;
