import React from "react";
import styles from "./about.module.scss";
import FounderSection from "./founder/founder";
import DedicatedSection from "./dedicated/dedicated";
import CustomerSection from "./customer/customer";

const AboutScreen = () => {
  return (
    <main className={styles.AboutScreen}>
      <div className={styles.banner}>
        <h1>About SIAWED</h1>
      </div>
      <div>
        <FounderSection />
        <DedicatedSection />
        <CustomerSection/>
      </div>
    </main>
  );
};

export default AboutScreen;
