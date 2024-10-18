import React from "react";
import styles from "./design.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const DesignSection = () => {
  return (
    <section className={styles.DesignSection}>
      <CustomContainer noSmPadding>
        <div className={`${styles.sectionRow} ${styles.row2}`}>
          <div className={styles.text}>
            <div data-aos="zoom-in">
              <h2>SIAWED is best Designed For:</h2>
              <hr />
              <div className={styles.points}>
                <p>01 Freelancers + Solopreneurs</p>
                <ul>
                  <li>
                    <p>Expand your professional network</p>
                  </li>
                  <li>
                    <p>
                      Participate in business workshops and networking events
                    </p>
                  </li>
                  <li>
                    <p>Gain access to experts and mentors</p>
                  </li>
                  <li>
                    <p>Connect with peers for collaboration and growth</p>
                  </li>
                  <li>
                    <p>Link with buyers and sellers to expand your reach</p>
                  </li>
                </ul>
              </div>

              <div className={styles.points}>
                <p>02 Entrepreneurs + Business Owners</p>
                <ul>
                  <li>
                    <p>
                      Looking for funding, market access, knowledge, and talent
                    </p>
                  </li>
                  <li>
                    <p>Join a vibrant community of like-minded entrepreneurs</p>
                  </li>
                  <li>
                    <p>
                      Access resources for marketing, advertising, and human
                      ​resources
                    </p>
                  </li>
                  <li>
                    <p>
                      Get financial support and guidance to scale your business
                    </p>
                  </li>
                  <li>
                    <p>
                      Stay informed with access to trade shows, exhibitions,
                      ​workshops, and more
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.points}>
                <p>03 Women Leading NGOs</p>
                <ul>
                  <li>
                    <p>
                      Build a supportive ecosystem that fosters inclusiveness{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Network with like-minded individuals to grow your impact
                    </p>
                  </li>
                  <li>
                    <p>
                      Gain insights on how to expand your reach and
                      effectiveness
                    </p>
                  </li>
                  <li>
                    <p>
                      Benefit from knowledge sharing and networking
                      opportunities
                    </p>
                  </li>
                  <li>
                    <p>Join SIAWED Membership Today</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.img}>
            <Image
              src="/assets/images/women-vector-2.png"
              alt="two-smiling-female-colleagues"
              fluid
              data-aos="fade-left"
            />
          </div>
        </div>
      </CustomContainer>
      <CustomContainer noSmPadding>
        <div className={`${styles.sectionRow} ${styles.row1}`}>
          <div className={styles.img}>
            <Image
              src="/assets/images/girl.png"
              alt="two-smiling-female-colleagues"
              fluid
              data-aos="fade-right"
            />
          </div>
          <div className={styles.text}>
            <Image
              src="/assets/images/flower.png"
              alt="flower"
              fluid
              width={400}
              data-aos="zoom-in"
            />
            <p data-aos="fade-left">Empower Our ​Women and Girls</p>
            <Image
              src="/assets/images/divider-vector.png"
              alt="divider"
              width={250}
              data-aos="zoom-out"
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default DesignSection;
