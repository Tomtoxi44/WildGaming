import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";

function MenuFilter({ cards, searchTerm, setSearchTerm }) {
  return (
    <div className="MenuFilters">
      <SearchBar
        cards={cards}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
export default MenuFilter;

MenuFilter.propTypes = {
  cards: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
};
