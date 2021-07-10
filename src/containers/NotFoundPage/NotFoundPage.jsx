import React from "react";
import { useLocation } from "react-router-dom";
import img from "./img/not-found.png";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();
  return (
    <div>
      <img className={styles.image} src={img} alt="not found" />
      <p className={styles.location}>
        No match for <u>{location.pathname}</u>
      </p>
    </div>
  );
};

export default NotFoundPage;
