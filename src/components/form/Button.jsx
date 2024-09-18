import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, size }) => {
  return (
    <div className={`${styles.button} ${styles[size]}`}>
      <button >{children}</button>
    </div>
  );
};

export default Button;
