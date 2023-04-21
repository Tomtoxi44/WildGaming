import PropTypes from "prop-types";
import LogoTitle from "../../assets/wild_gaming_title.png";
import loupe from "../../assets/Loupe.png";

function NavBar({ showMenu, setShowMenu }) {
  const handleLoupeClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <button onClick={handleLoupeClick} type="button" className="loupe">
        <img src={loupe} alt="Loupe-icon" />
      </button>
      <div className="logo">
        <img src={LogoTitle} alt="logo-site" />
      </div>
    </div>
  );
}

export default NavBar;

NavBar.propTypes = {
  setShowMenu: PropTypes.string.isRequired,
  showMenu: PropTypes.string.isRequired,
};
