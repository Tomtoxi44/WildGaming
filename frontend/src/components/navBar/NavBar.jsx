import React, { useState } from "react";
import LogoTitle from "../../assets/wild_gaming_title.png";
import loupe from "../../assets/Loupe.png";
import MenuFilter from "./MenuFilter";
import HeroImage from "./HeroImage";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleLoupeClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar">
        <button onClick={handleLoupeClick} type="button" className="loupe">
          <img src={loupe} alt="Loupe-icon" />
        </button>
        <div className="logo">
          <img src={LogoTitle} alt="logo-site" />
        </div>
      </div>
      {showMenu && <MenuFilter />}
      <HeroImage />
    </>
  );
}

export default NavBar;
