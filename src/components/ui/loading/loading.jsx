import React from "react";
import styles from "./loading.module.scss";
import { Image, Spinner } from "react-bootstrap";

const LoadingScreen = () => {
  return (
    <div className={styles.LoadingScreen}>
      <div className={styles.box}>
        <Spinner />
      </div>
    </div>
  );
};

export default LoadingScreen;
