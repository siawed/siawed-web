import React from "react";
import styles from "./custom_input.module.scss";

const CustomInput = ({ placeHolder, onChange, value, ...props }) => {
  return (
    <input
      className={styles.control}
      placeholder={placeHolder}
      {...props}
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomInput;
