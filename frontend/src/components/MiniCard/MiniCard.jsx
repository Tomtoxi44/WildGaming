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

export default MiniCard;

MiniCard.propTypes = {
  setDescription: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
};
