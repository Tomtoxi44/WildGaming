import PropTypes from "prop-types";

function MiniCard({ card }) {
  return (
    <div className="container">
      <div className="imgMiniCard">
        <img
          className="img"
          src={card.jacket_url}
          alt={`Jacket de ${card.titre}`}
        />
      </div>
      <div className="name">{card.titre}</div>
    </div>
  );
}

export default MiniCard;

MiniCard.propTypes = {
  card: PropTypes.string.isRequired,
};
