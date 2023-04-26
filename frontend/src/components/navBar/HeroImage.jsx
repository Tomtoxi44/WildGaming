import PropTypes from "prop-types";
import React from "react";
import img from "../../assets/heroImg.png";
import MenuFilter from "./MenuFilter";

function HeroImage({ showMenu, cards, searchTerm, setSearchTerm }) {
  return (
    <div className="hero-container">
      {showMenu && (
        <MenuFilter
          cards={cards}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}
      <img src={img} alt="heros" className="hero-image" />
    </div>
  );
}

export default HeroImage;

HeroImage.propTypes = {
  showMenu: PropTypes.string.isRequired,
  cards: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
};
