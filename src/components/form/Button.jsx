import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, size, onClick }) => {
  return (
      <button onClick={onClick} className={`${styles.button} ${styles[size]}`}>{children}</button>
  );
};

export default Button;
