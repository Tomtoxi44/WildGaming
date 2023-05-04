import PropTypes from "prop-types";
import LogoTitle from "../../assets/wild_gaming_title.png";
import loupe from "../../assets/loupe.png";

function NavBar({ showMenu, setShowMenu, setShowMenuFilter }) {
  const handleLoupeClick = () => {
    if (showMenu) {
      setShowMenu(false);
      setTimeout(() => {
        setShowMenuFilter(false);
      }, 500);
    } else {
      setShowMenu(true);
      setShowMenuFilter(true);
    }
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
  setShowMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  setShowMenuFilter: PropTypes.func.isRequired,
};
