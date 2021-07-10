import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";
import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";
import Favorite from "@components/PersonPage/Favorite";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgSpaceStation);
    }
  }, [isTheme]);
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />

      <ul className={styles.list__container}>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>
            Not Found
          </NavLink>
        </li>
        <li>
          <NavLink to="/fail" exact>
            Fail
          </NavLink>
        </li>
        <Favorite />
      </ul>
    </div>
  );
};

export default Header;
