import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "../index.css";
import styles from "./UiButton.module.css";

const UiButton = ({ text, disabled, onClick, thema = "dark", classes }) => {
  return (
    <>
      <button
        className={cn(styles.button, styles[thema], classes)}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  thema: PropTypes.string,
  classes: PropTypes.string,
};

export default UiButton;
