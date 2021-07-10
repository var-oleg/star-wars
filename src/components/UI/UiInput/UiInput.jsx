import PropTypes from "prop-types";
import cn from "classnames";

import icon from "./img/cancel.svg";

import "../index.css";
import styles from "./UiInput.module.css";

const UiInput = ({ value, handleSearch, placeholder, classes }) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input
      type="text"
      value={value}
      onChange={(event) => handleSearch(event.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    <img
      onClick={() => value && handleSearch("")}
      src={icon}
      className={cn(styles.clear, !value && styles.clear__disabled)}
      alt="Clear"
    />
  </div>
);

UiInput.propTypes = {
  value: PropTypes.string,
  handleSearch: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};

export default UiInput;
