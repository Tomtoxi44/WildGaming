import PropTypes from "prop-types";

function MiniCard({ cards, setDescription }) {
  return (
    <div className="cardsContainer">
      {cards.map((card) => {
        return (
          <button
            type="button"
            onClick={() => {
              setDescription(card);
            }}
          >
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
          </button>
        );
      })}
    </div>
  );
}

export default MiniCard;

MiniCard.propTypes = {
  setDescription: PropTypes.string.isRequired,
  cards: PropTypes.string.isRequired,
};
