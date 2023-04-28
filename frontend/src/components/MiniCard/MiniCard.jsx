import PropTypes from "prop-types";

function MiniCard({ card, setDescription, showMenu, setShowMenu }) {
  const show = () => {
    return showMenu ? setShowMenu(!showMenu) : setShowMenu(showMenu);
  };
  return (
    <button
      className="container"
      type="button"
      onClick={() => {
        setDescription(card);
        show();
      }}
    >
      <div className="imgMiniCard">
        <img
          className="img"
          src={card.jacket_url}
          alt={`Jacket de ${card.titre}`}
        />
      </div>
      <div className="name">{card.titre}</div>
    </button>
  );
}

export default MiniCard;

MiniCard.propTypes = {
  setDescription: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  showMenu: PropTypes.string.isRequired,
  setShowMenu: PropTypes.string.isRequired,
};
