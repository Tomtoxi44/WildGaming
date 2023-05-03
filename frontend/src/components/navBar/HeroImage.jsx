import PropTypes from "prop-types";
import React from "react";
import MenuFilter from "./MenuFilter";

function HeroImage({
  showMenu,
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
    <div className="hero-container">
      {showMenu && (
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
  plateformes: PropTypes.string.isRequired,
  setPlateformes: PropTypes.string.isRequired,
};
