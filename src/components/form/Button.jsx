import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <div className={styles.formButton}>
      <button>{children}</button>
    </div>
  );
};

export default Button;
