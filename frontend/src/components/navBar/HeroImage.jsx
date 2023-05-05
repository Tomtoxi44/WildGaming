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
  plateformes,
  setPlateformes,
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
          plateformes={plateformes}
          setPlateformes={setPlateformes}
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
  showMenu: PropTypes.bool.isRequired,
  cards: PropTypes.instanceOf(Array).isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  selectedGenres: PropTypes.instanceOf(Array).isRequired,
  setSelectedGenres: PropTypes.func.isRequired,
  selectPlateformes: PropTypes.instanceOf(Array).isRequired,
  setSelectPlateformes: PropTypes.func.isRequired,

  plateformes: PropTypes.instanceOf(Array).isRequired,
  setPlateformes: PropTypes.func.isRequired,

  showMenuFilter: PropTypes.bool.isRequired,
};
