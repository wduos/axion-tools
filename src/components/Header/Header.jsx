import "./Header.css";
import logoImg from "../../assets/logo.svg";
import iconBars from "../../assets/icons/bars.svg";
import iconHouse from "../../assets/icons/house.svg";
import iconLayers from "../../assets/icons/layers.svg";

function Header({ currentPage }) {
  const isHome = currentPage === "Home";

  return (
    <header className="Header">
      <button type="button" id="sidebarBtn">
        <img src={iconBars} alt="Staggered bars icon" />
        <img src={logoImg} alt="Axion's logo" />
      </button>

      <div className="header-right">
        <div>
          {isHome ? (
            <img src={iconHouse} alt="House icon" />
          ) : (
            <img src={iconLayers} alt="Layers icon" />
          )}
          <h2>{currentPage}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
