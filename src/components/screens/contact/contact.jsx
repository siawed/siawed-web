import React from "react";
import styles from "./contact.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import {
  EnvelopeAtFill,
  GeoAltFill,
  PhoneFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import Link from "next/link";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextArea from "@/components/ui/custom_text_area/custom_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";
import SocialLinks from "@/components/ui/social_links/social_links";

const ContactScreen = () => {
  return (
    <main className={styles.ContactScreen}>
      <CustomContainer variant={2}>
        <div className={styles.contBox}>
          <div className={styles.left} data-aos='flip-left'>
            <div className={styles.box}>
              <h1>Contact Us</h1>
              <div className={styles.contactItem}>
                <GeoAltFill />
                <p>
                  <strong>
                    Southern Industrial Academy
                    <br /> for Women Entrepreneurs ​Development,
                  </strong>
                  <br />
                  601, “DEEPA”, Chitra Avenue, 9, <br />
                  Choolaimedu High Road , <br />
                  ​Choolaimedu , Chennai - 600094.
                </p>
              </div>
              <div className={styles.contactItem}>
                <EnvelopeAtFill />
                <p>
                  <Link href="/">info@siawed.org</Link>
                </p>
              </div>
              <div className={styles.contactItem}>
                <TelephoneFill />
                <p>
                  <Link href="/">044 4351 4334</Link>
                </p>
              </div>
              <div className={styles.contactItem}>
                <PhoneFill />
                <p>
                  <Link href="/">+91 99406 66603</Link>
                </p>
              </div>
              <SocialLinks />
            </div>
          </div>
          <div className={styles.right} data-aos='flip-right'>
            <form>
              <div>
                <h2>Have Question?</h2>
                <CustomInput placeHolder="Name" />
                <CustomInput placeHolder="Email" />
                <CustomInput placeHolder="Subject" />
                <CustomTextArea placeHolder="Message" />
              </div>
              <CustomButton>Submit</CustomButton>
            </form>
          </div>
        </div>
      </CustomContainer>
      <CustomContainer>
        <div className={styles.map} data-aos='fade-up'>
          <h2>Locate Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31092.25566013182!2d80.231443!3d13.065437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526689dde82939%3A0xb091e174611bf205!2sChitra%20Residential%20Complex!5e0!3m2!1sen!2sus!4v1729072719336!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CustomContainer>
    </main>
  );
};

export default ContactScreen;
