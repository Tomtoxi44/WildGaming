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
}) {
  return (
    <div className="MenuFilters">
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
