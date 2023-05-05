import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import CheckboxDeroulantGenre from "../filters/CheckboxDeroulantGenre";
import CheckboxDeroulantPlateforme from "../filters/CheckboxDeroulantPlateforme";

function MenuFilter({
  cards,
  searchTerm,
  setSearchTerm,
  selectedGenres,
  setSelectedGenres,
  selectPlateformes,
  setSelectPlateformes,

  plateformes,
  setPlateformes,

  showMenu,
}) {
  return (
    <div className={!showMenu ? "MenuFilters" : "MenuFilters back"}>
      <SearchBar
        cards={cards}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CheckboxDeroulantPlateforme
        selectPlateformes={selectPlateformes}
        setSelectPlateformes={setSelectPlateformes}
        plateformes={plateformes}
        setPlateformes={setPlateformes}
      />
      <CheckboxDeroulantGenre
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
    </div>
  );
}
export default MenuFilter;

MenuFilter.propTypes = {
  cards: PropTypes.instanceOf(Array).isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  selectedGenres: PropTypes.instanceOf(Array).isRequired,
  setSelectedGenres: PropTypes.func.isRequired,
  selectPlateformes: PropTypes.instanceOf(Array).isRequired,
  setSelectPlateformes: PropTypes.func.isRequired,


  plateformes: PropTypes.instanceOf(Array).isRequired,
  setPlateformes: PropTypes.func.isRequired,

  showMenu: PropTypes.bool.isRequired,

};
