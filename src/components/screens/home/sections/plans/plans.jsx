import React from "react";
import styles from "./plans.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const PlanCard = () => {
  return (
    <div className={styles.PlanCard} data-aos="flip-left">
      <div className={styles.head}>
        <h4>The SIAWED Exposure</h4>
        <p>MEET THE CREW</p>
      </div>
      <div>
        <p>Free for 1 month</p>
        <div className={styles.btn}>
          <CustomButton>Sign Up Now</CustomButton>
        </div>

        <div className={styles.points}>
          <p>What’s included in the SIAWED ​Experience:</p>
          <ul>
            <li>
              <p>Access to the SIAWED ​Community</p>
            </li>
            <li>
              <p>Weekly SIAWED Meetups</p>
            </li>
            <li>
              <p>SIAWED Tuesday Hangouts</p>
            </li>
            <li>
              <p>SIAWED Addas</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const PlansSection = () => {
  const plans = [
    {
      head: "",
    },
    {
      head: "",
    },
    {
      head: "",
    },
  ];

  return (
    <section className={styles.PlansSection}>
      <CustomContainer variant={2}>
        <div>
          <h2 data-aos="flip-up">SIAWED Membership plan</h2>
        </div>
        <div>
          <Row>
            {plans.map((plan, idx) => {
              return (
                <Col key={`plan_${idx}`} xs={12} sm={6} lg={4}>
                  <PlanCard plan={plan} />
                </Col>
              );
            })}
          </Row>
        </div>
      </CustomContainer>
    </section>
  );
};

export default PlansSection;
