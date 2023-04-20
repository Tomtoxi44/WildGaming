import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function ConsoleButton({ nom, classe, plateforme }) {
  const [jeux, setJeux] = useState([]);

  const handleClick = async () => {
    try {
      const response = await axios.get("http://localhost:5002/api/jeux", {
        params: {
          plateforme,
        },
      });
      setJeux(response.data);
    } catch (err) {
      console.error(err);
    }
  };

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
    <div>
      <button
        type="button"
        className={classe}
        style={style}
        onClick={handleClick}
      >
        {nom}
      </button>
      {jeux.map((jeu) => (
        <div key={jeu.id}>{jeu.titre}</div>
      ))}
    </div>
  );
}

ConsoleButton.propTypes = {
  nom: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
  plateforme: PropTypes.string.isRequired,
};

export default ConsoleButton;
