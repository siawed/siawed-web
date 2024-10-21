import React, { useEffect, useState } from "react";
import styles from "./gallery.module.scss";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { getAllData } from "@/libs/firebase/firebase";

const GalleryScreen = ({ images }) => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => setIndex(index);

  return (
    <main className={styles.GalleryScreen}>
      <div className={styles.banner}>
        <h1>SIAWED Gallery</h1>

        <h3>We have gathered many beautiful moments during our journey</h3>
      </div>
      <div className={styles.wrap}>
        <CustomContainer>
          <Row>
            {images.map((img, idx) => {
              return (
                <Col key={`img_${idx}`} xs={6} md={4} lg={4}>
                  <div
                    className={styles.imgCont}
                    onClick={() => {
                      setIndex(idx);
                    }}
                    data-aos={idx % 2 ? "flip-right" : "flip-left"}
                  >
                    <Image src={img.imgUrl} fluid alt="xx" />
                  </div>
                </Col>
              );
            })}
          </Row>

          <Lightbox
            slides={images.map((i) => {
              return { src: i.imgUrl };
            })}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </CustomContainer>
      </div>
    </main>
  );
};

export default GalleryScreen;
