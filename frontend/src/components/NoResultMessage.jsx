import PropTypes from "prop-types";

function NoResultMessage({ SearchTerm }) {
  return (
    <div className="no-results">
      <p>Aucun résultat ne correspond à votre recherche pour "{SearchTerm}"</p>
    </div>
  );
}

NoResultMessage.propTypes = {
  SearchTerm: PropTypes.string.isRequired,
};

export default NoResultMessage;
