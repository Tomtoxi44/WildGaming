import PropTypes from "prop-types";
import React from "react";
import MenuFilter from "./MenuFilter";

function HeroImage({ showMenu }) {
  return (
    <div className="hero-container">
      {showMenu && <MenuFilter />}
      <img
        src="https://i.jeuxactus.com/datas/divers/d/i/divers-jeux-video/xl/divers-jeux-video-artwor-5ec3efe21e0d1.jpg"
        alt="heros"
        className="hero-image"
      />
    </div>
  );
}

export default HeroImage;

HeroImage.propTypes = {
  showMenu: PropTypes.string.isRequired,
};
