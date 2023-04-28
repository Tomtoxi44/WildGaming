import PropTypes from "prop-types";

function MiniCard({ card, setDescription }) {
  return (
    <button
      className="container"
      type="button"
      onClick={() => {
        setDescription(card);
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
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    jacket_url: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
  }).isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default MiniCard;
