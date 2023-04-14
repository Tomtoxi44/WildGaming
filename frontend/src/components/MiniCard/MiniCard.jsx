import PropTypes from "prop-types";

function MiniCard({ cards }) {
  return (
    <div className="cardsContainer">
      {cards.map((card) => {
        return (
          <div key={card.id} className="container">
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
      })}
    </div>
  );
}

export default MiniCard;

MiniCard.propTypes = {
  cards: PropTypes.string.isRequired,
};
