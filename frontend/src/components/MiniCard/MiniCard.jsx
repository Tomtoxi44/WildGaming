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
MiniCard.propTypes = {
  setDescription: PropTypes.func.isRequired,

  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,

  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    jacket_url: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MiniCard;
