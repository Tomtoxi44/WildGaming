import PropTypes from "prop-types";
import React from "react";
import img from "../../assets/heroImg.png";
import MenuFilter from "./MenuFilter";

function HeroImage({ showMenu }) {
  return (
    <div className="hero-container">
      {showMenu && <MenuFilter />}
      <img src={img} alt="heros" className="hero-image" />
    </div>
  );
}

export default HeroImage;

HeroImage.propTypes = {
  showMenu: PropTypes.string.isRequired,
};
