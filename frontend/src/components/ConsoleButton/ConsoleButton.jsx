import React from "react";
import PropTypes from "prop-types";
import "./ConsoleButton.css";

function ConsoleButton({ nom, classe }) {
  function handleClick() {
    console.info(nom);
  }

  let color = "";
  switch (nom) {
    case "Game boy":
      color = "darkslateblue";
      break;
    case "Xbox":
      color = "green";
      break;
    case "PlayStation 4":
      color = "blue";
      break;
    case "PlayStation 5":
      color = "blue";
      break;
    case "Switch":
      color = "red";
      break;
    case "PC":
      color = "rosybrown";
      break;
    default:
      color = "black";
  }

  const style = {
    backgroundColor: color,
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
