import React from "react";
import PropTypes from "prop-types";

function ConsoleButton({ nom, classe }) {
  function handleClick() {
    console.info(nom);
  }

  const style = {
    color: "white",
    border: "none",
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    borderRadius: "15px",
    fontSize: "1.1rem",
  };

  return (
    <button
      type="button"
      className={classe}
      style={style}
      onClick={handleClick}
    >
      {nom}
    </button>
  );
}

ConsoleButton.propTypes = {
  nom: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
};

export default ConsoleButton;
