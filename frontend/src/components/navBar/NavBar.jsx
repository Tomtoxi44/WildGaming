import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import LogoTitle from "../../assets/wild_gaming_title.png";

function NavBar({ showMenu, setShowMenu }) {
  const handleLoupeClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={LogoTitle} alt="logo-site" />
      </div>
      <button type="button" onClick={handleLoupeClick} className="Loupe">
        <FontAwesomeIcon
          icon={faSearch}
          style={{ color: "orange", fontSize: "20px" }}
        />
      </button>
    </div>
  );
}

export default NavBar;

NavBar.propTypes = {
  setShowMenu: PropTypes.string.isRequired,
  showMenu: PropTypes.string.isRequired,
};
