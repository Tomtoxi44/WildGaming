import PropTypes from "prop-types";
import LogoTitle from "../../assets/wild_gaming_title.png";
import loupe from "../../assets/loupe.png";

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
        <img className="loupeImg" src={loupe} alt="search button" />
      </button>
    </div>
  );
}

export default NavBar;

NavBar.propTypes = {
  setShowMenu: PropTypes.string.isRequired,
  showMenu: PropTypes.string.isRequired,
};
