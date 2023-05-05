import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function CardDescription({
  description,
  setDescription,
  setShowMenu,
  setSelectPlateformes,
}) {
  const [equivalencePlateformeCouleurs, setEquivalencePlateformeCouleurs] =
    useState([]);
  const [switchAnimation, setSwitchAnimation] = useState("on");

  const handleSwitchAnimation = () => {
    setSwitchAnimation("off");
    setTimeout(() => {
      setDescription(undefined);
    }, 500);
  };

  const handleConsoleBouton = (e) => {
    setSwitchAnimation("off");
    setTimeout(() => {
      setDescription(undefined);
      setSelectPlateformes([e.target.value]);
    }, 500);
  };

  function generateBackgroundColor() {
    const tmp = [];
    description.plateforme.forEach((plateforme) => {
      if (
        plateforme === "Xbox 360" ||
        plateforme === "Xbox One" ||
        plateforme === "Xbox Series X/S"
      ) {
        tmp.push("green");
      }
      if (
        plateforme === "PlayStation 2" ||
        plateforme === "PlayStation 3" ||
        plateforme === "PlayStation 4" ||
        plateforme === "PlayStation 5"
      ) {
        tmp.push("blue");
      }
      if (
        plateforme === "Nintendo Switch" ||
        plateforme === "Wii U" ||
        plateforme === "NES"
      ) {
        tmp.push("red");
      }
      if (
        plateforme === "PC" ||
        plateforme === "Microsoft Windows" ||
        plateforme === "macOS" ||
        plateforme === "Linux" ||
        plateforme === "MacOS"
      ) {
        tmp.push("rosybrown");
      }
      if (plateforme === "iOS" || plateforme === "Android") {
        tmp.push("lightgray");
      }
      if (plateforme === "Stadia" || plateforme === "Nvidia Shield") {
        tmp.push("grey");
      }
      if (
        plateforme === "PlayStation Vita" ||
        plateforme === "Game Boy" ||
        plateforme === "Game Boy Color" ||
        plateforme === "Game Boy Advance" ||
        plateforme === "Nintendo DS"
      ) {
        tmp.push("darkslateblue");
      }
    });
    setEquivalencePlateformeCouleurs(tmp);
  }
  useEffect(() => {
    generateBackgroundColor();
  }, []);

  return (
    <div className="popUp">
      <div
        className={`containerDescription containerDescription_${switchAnimation}`}
      >
        <button
          type="button"
          className="cross"
          onClick={() => {
            setShowMenu(false);
            handleSwitchAnimation();
          }}
        >
          X
        </button>
        <div className="titreDescription">
          <h2>{description.titre}</h2>
        </div>
        <div className="imgDescription">
          <img
            src={description.jacket_url}
            alt={`Jacket de ${description.titre}`}
          />
        </div>
        <div className="descriptionGlobal">
          <div className="plateformeDescription">
            {equivalencePlateformeCouleurs.length ===
              description.plateforme.length &&
              description.plateforme.map((e, i) => {
                return (
                  <button
                    onClick={(value) => {
                      handleConsoleBouton(value);
                    }}
                    value={e}
                    type="button"
                    className={`btnConsole ${equivalencePlateformeCouleurs[i]}`}
                  >
                    {e}
                  </button>
                );
              })}
          </div>
          <p className="anneDescritpion">
            Date de sortie : {description.annee_sortie}
          </p>
          <p className="txtDescritpion">{description.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDescription;

CardDescription.propTypes = {
  setDescription: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setShowMenu: PropTypes.string.isRequired,
  setSelectPlateformes: PropTypes.string.isRequired,
};
