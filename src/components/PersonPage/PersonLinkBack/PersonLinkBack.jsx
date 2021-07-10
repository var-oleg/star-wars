import React from "react";
import icon from "./img/back.svg";
import { useHistory } from "react-router-dom";

import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const history = useHistory();
  const handleGoBack = (event) => {
    event.preventDefault();
    history.goBack();
  };
  return (
    <a href="#" onClick={handleGoBack} className={styles.link}>
      <img src={icon} alt="Go back" className={styles.link__img} />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
