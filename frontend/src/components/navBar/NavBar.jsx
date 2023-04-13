import React from "react";
import "./navBar.scss";
import LogoTitle from "../../assets/wild_gaming_title.png";
import loupe from "../../assets/Loupe.png";

function NavBar() {
  return (
    <div className="navbar">
      <img src={loupe} alt="Loupe-icon" className="loupe" />
      <div className="logo">
        <img src={LogoTitle} alt="logo-site" />
      </div>
    </div>
  );
}

export default NavBar;
