import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";
import favoriteFillIcon from "./img/favorite-fill.svg";
import favoriteIcon from "./img/favorite.svg";
import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePerson = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          onClick={dispatchFavoritePerson}
          src={personFavorite ? favoriteFillIcon : favoriteIcon}
          alt="Add to Favorite"
          className={styles.favorite}
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
