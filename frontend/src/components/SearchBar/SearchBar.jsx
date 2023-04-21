import PropTypes from "prop-types";

function SearchBar({ cards, searchTerm, setSearchTerm }) {
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSearch = (search) => {
    setSearchTerm(search);
  };

  const handleKeyPress = () => {};

  return (
    <div className="searchBar_container">
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          placeholder="Rechercher un jeu"
          onChange={handleSearchTerm}
          value={searchTerm}
        />
      </div>
      <div className="search__results">
        {cards
          .filter((card) => {
            return card.titre.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .slice(0, 10)
          .map((card) => {
            return (
              searchTerm &&
              card.titre !== searchTerm && (
                <button
                  type="button"
                  onClick={() => {
                    onSearch(card.titre);
                  }}
                  onKeyDown={handleKeyPress}
                  className="search__result"
                >
                  {card.titre}
                </button>
              )
            );
          })}
      </div>
    </div>
  );
}
export default SearchBar;

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
  cards: PropTypes.string.isRequired,
};
