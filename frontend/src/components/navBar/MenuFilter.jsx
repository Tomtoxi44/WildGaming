import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import CheckboxDeroulantGenre from "../filters/CheckboxDeroulantGenre";

function MenuFilter({
  cards,
  searchTerm,
  setSearchTerm,
  selectedGenres,
  setSelectedGenres,
}) {
  return (
    <div className="MenuFilters">
      <SearchBar
        cards={cards}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
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
};
