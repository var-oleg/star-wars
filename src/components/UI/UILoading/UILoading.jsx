import React, { useState, useEffect } from "react";
import cn from "classnames";
import loaderBlack from "./img/loader-black.svg";
import loaderWhite from "./img/loader-white.svg";
import loaderBlue from "./img/loader-blue.svg";

import styles from "./UILoading.module.css";

const UILoading = ({ thema = "white", isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);
  useEffect(() => {
    switch (thema) {
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;

      default:
        setLoaderIcon(loaderWhite);
    }
  }, []);
  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="loader"
    />
  );
};

export default UILoading;
