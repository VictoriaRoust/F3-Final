import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import doctorImg from "../Assets/imgs/doctor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as notSolidStar } from "@fortawesome/free-regular-svg-icons";

const Card = (props) => {
  const { addFavorite, removeFavorite } = useContext(ContextGlobal);
  const location = useLocation();
  const isFavoritePage = location.pathname === "/favorites";

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isDentistFavorite = favorites.some((favorite) => favorite.id === props.dentist.id);

  const handleAddFavorite = () => {
    const updatedDentist = { ...props.dentist, isFavorite: true };
    addFavorite(updatedDentist);
  };

  const handleRemoveFavorite = () => {
    removeFavorite(props.dentist.id);
  };

  const handleToggleFavorite = () => {
    if (isDentistFavorite) {
      handleRemoveFavorite();
    } else {
      handleAddFavorite();
    }
  };

  return (
    <div className="card">
      <h1>{props.dentist.username}</h1>
      <img src={doctorImg} alt="dentist-img" />
      <h4>{props.dentist.name}</h4>
      <p>{props.dentist.id}</p>

      <Link className="col" to={`detail/${props.dentist.id}`} id="detail-link">
        Go to Detail
      </Link>

      {!isFavoritePage ? (
        <button
          onClick={handleToggleFavorite}
          className="favoriteButton"
          id="btnFavorite"
          disabled={isDentistFavorite}
        >
          <FontAwesomeIcon
            icon={isDentistFavorite ? solidStar : notSolidStar}
            style={{ color: "#6750a4" }}
            id="star"
          />
        </button>
      ) : (
        <button
          onClick={handleToggleFavorite}
          className="favoriteButton"
          id="btnFavorite"
        >
          <FontAwesomeIcon
            icon={isDentistFavorite ? solidStar : notSolidStar}
            style={{ color: "#6750a4" }}
            id="star"
          />
        </button>
      )}
    </div>
  );
};

export default Card;
