import React from "react";
import styles from "../custom_input/custom_input.module.scss";

const CustomTextArea = ({ placeHolder, onChange, value, ...props }) => {
  return (
    <textarea
      className={styles.control}
      placeholder={placeHolder}
      {...props}
      onChange={onChange}
      value={value}
      rows={3}
    />
  );
};

export default CustomTextArea;
