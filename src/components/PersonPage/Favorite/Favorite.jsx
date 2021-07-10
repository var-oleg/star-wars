import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import icon from "./img/favorite.svg";

import styles from "./Favorite.module.css";

const Favorite = () => {
  const [counter, setCounter] = useState(0);
  const storeData = useSelector((state) => state.favoriteReducer);
  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCounter("...") : setCounter(length);
  });
  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{counter}</span>
        <img className={styles.icon} src={icon} alt="favorite" />
      </Link>
    </div>
  );
};

export default Favorite;
