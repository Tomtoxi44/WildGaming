import React from "react";
import img from "../../assets/heroImg.png";
import "./navBar.scss";

function HeroImage() {
  return (
    <div>
      <img src={img} alt="héros" className="hero-image" />
    </div>
  );
}

export default HeroImage;
