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
              src="/assets/images/two-smiling-female-colleagues.jpg"
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
              <h2 data-aos="fade-right">SIAWED is dedicated</h2>

              <p data-aos="fade-left">
                to enhancing the entrepreneurial skills and training of its
                members by offering a ​range of programs, courses, and
                collaborations with corporations and relevant ​entities. We
                provide hands-on, real-time training and exposure across various
                fields, ​ensuring our members are well-prepared to tackle any
                entrepreneurial challenge ​and achieve success.
              </p>

              <Image
                src="/assets/images/flower-vector.png"
                alt="flower-vector"
                className={`${styles.flower} ${styles.f2}`}
                width={190}
                data-aos="fade-right"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.sectionRow} ${styles.row2}`}>
          <div className={styles.text}>
            <div>
              <h2 data-aos="fade-up">Shaping the Future:</h2>
              <h3 data-aos="fade-down">
                The Impactful Role of Women in ​Business and Entrepreneurship
              </h3>
              <hr data-aos="fade-down" />
              <p data-aos="fade-right">
                Women&apos;s entrepreneurship and leadership have the power to
                drive profound social ​change, empowering more women to become
                confident, financially independent, and ​influential in their
                communities. The era when women were confined to traditional
                roles is long behind us. As we step ​into this promising new
                decade, a bright future lies ahead, particularly for aspiring
                ​women entrepreneurs in India. The momentum for change is
                building steadily and ​unmistakably.
              </p>
              <p data-aos="fade-left">
                Today, women in business are essential and irreplaceable
                contributors to the global ​quest for economic stability. This
                acknowledgment is equally strong in India, where ​women are
                emerging as powerful change-makers, representing the
                transformative ​influence they wield across various sectors.
              </p>
              <p data-aos="fade-right">
                Women are recognized as pivotal forces in entrepreneurship,
                poised to continue ​leading change for years to come. Women
                entrepreneurs bring unique perspectives ​and innovative thought
                processes that significantly enhance the quality of solutions
                ​and outcomes. They come from diverse backgrounds, bringing a
                wealth of experiences ​that enrich decision-making. Through
                their creativity and ingenuity, they drive ​economic growth,
                foster innovation, and boost productivity. Moreover, they
                inspire ​other women and individuals to pursue entrepreneurship
                and establish supportive ​networks. The empowerment and
                development of women are crucial to cultivating a ​diverse and
                inclusive entrepreneurial ecosystem worldwide.
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
