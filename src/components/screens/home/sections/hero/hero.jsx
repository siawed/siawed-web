import React from "react";
import styles from "./hero.module.scss";
import { Image } from "react-bootstrap";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <section className={styles.HeroSection}>
        <div className={styles.container}>
          <div className={styles.wrap}>
            <div className={styles.left} data-aos="fade-up">
              <h1>
                <span>“Together</span>
                <br />
                We Rise”
              </h1>
              <Image
                alt="plant-vector"
                src="/assets/images/plant-vector.png"
                fluid
                className={styles.vec}
              />
            </div>

            <div className={styles.right}>
              <div className={styles.logo} data-aos="fade-left">
                <Image src="/logo/logo.png" alt="logo" fluid />
              </div>
              <div className={styles.textContent} data-aos="fade-right">
                <div className={styles.inner}>
                  <p className={styles.top}>
                    We are a trailblazing digital community that celebrates the
                    remarkable stories of female achievers and fosters powerful
                    female networking groups. Our platform empowers aspiring
                    women to connect, share their dreams and values, and inspire
                    one another. Together, we illuminate the path for more women
                    to discover and reach their full potential.
                  </p>
                  <hr />
                  <div className={styles.bottom}>
                    Are you a budding entrepreneur?
                    <br />
                    Become a FREE Member TODAY!
                    <br />
                    <Link href="#">Click here!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.bottomCont}>
        <div className={styles.wrap}>
          <div className={styles.textContent} data-aos="fade-down">
            <div className={styles.inner}>
              <p className={styles.top}>
                We are a trailblazing digital community that celebrates the
                remarkable stories of female achievers and fosters powerful
                female networking groups. Our platform empowers aspiring women
                to connect, share their dreams and values, and inspire one
                another. Together, we illuminate the path for more women to
                discover and reach their full potential.
              </p>
              <hr />
              <div className={styles.bottom}>
                Are you a budding entrepreneur?
                <br />
                Become a FREE Member TODAY!
                <br />
                <Link href="#">Click here!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
