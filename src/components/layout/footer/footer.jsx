import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./footer.module.scss";
import { Image } from "react-bootstrap";
import SocialLinks from "@/components/ui/social_links/social_links";
import Link from "next/link";
import {
  ChevronRight,
  EnvelopeAtFill,
  Geo,
  GeoAltFill,
  Link45deg,
  PhoneFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import PAGES from "@/constants/pages";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <CustomContainer>
        <div className={styles.top}>
          <div className={styles.left}>
            <Image src="/logo/logo.png" width={200} alt="logo" />
            <p>Empowering Women to Achieve Global Success</p>
            <SocialLinks />
          </div>

          <div className={styles.right}>
            <div className={styles.box}>
              <h1>Quick Links</h1>
              {PAGES.map((page) => {
                return (
                  <Link key={page.name} href={page.href}>
                    {page.name}
                  </Link>
                );
              })}
              <Link href={"/donate"}>Donate Us</Link>
            </div>
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
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className={styles.bottom}>
          <p>Copyright &copy; 2024 SIAWED</p>
          <div className={styles.links}>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
            {/* <span>|</span>
            <Link href="/refund-policy">Refund Policy</Link> */}
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
