const { Container } = require("react-bootstrap");
import styles from "./custom_container.module.scss";

const CustomContainer = ({
  children,
  className,
  ofHid = true,
  noSmPadding,
  variant = 1,
  ...props
}) => {
  return (
    <div
      className={`${styles.wrap} ${ofHid ? styles.ofHid : ""} 
     
      `}
      {...props}
    >
      <Container
        className={`${className} ${styles.custom_container} 
       ${noSmPadding ? styles.noSmPadding : ""}
       ${styles[`v${variant}`]}
      `}
      >
        {children}
      </Container>
    </div>
  );
};

export default CustomContainer;
