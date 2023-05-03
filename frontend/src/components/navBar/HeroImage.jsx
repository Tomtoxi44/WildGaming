import PropTypes from "prop-types";
import React from "react";
import MenuFilter from "./MenuFilter";

function HeroImage({
  showMenu,
  showMenuFilter,
  cards,
  searchTerm,
  setSearchTerm,
  selectedGenres,
  setSelectedGenres,
  selectPlateformes,
  setSelectPlateformes,
}) {
  return (

    <div className={!showMenu ? "hero-container" : "hero-container cut"}>
      {showMenuFilter && (

 
        <MenuFilter
          cards={cards}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          selectPlateformes={selectPlateformes}
          setSelectPlateformes={setSelectPlateformes}
          showMenu={showMenu}
        />
      )}
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
  cards: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
  selectedGenres: PropTypes.string.isRequired,
  setSelectedGenres: PropTypes.string.isRequired,
  selectPlateformes: PropTypes.string.isRequired,
  setSelectPlateformes: PropTypes.string.isRequired,
  showMenuFilter: PropTypes.string.isRequired,
};
