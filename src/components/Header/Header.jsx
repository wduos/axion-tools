import "./Header.css";
import logoImg from "../../assets/logo.svg";
import iconBars from "../../assets/icons/bars.svg";
import iconHouse from "../../assets/icons/house.svg";
import iconLayers from "../../assets/icons/layers.svg";
import iconInfo from "../../assets/icons/info.svg";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ currentPage }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const isHome = currentPage === "Home";
  const isInfo = currentPage === "Info";

  function handleShowSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <header className="Header">
        <div className="header-top">
          <Link to="/">
            <img src={logoImg} alt="Axion's logo" />
          </Link>
          <button type="button" onClick={() => handleShowSidebar()}>
            <img src={iconBars} alt="Staggered bars icon" />
          </button>
        </div>
        <div className="header-bottom">
          {isHome ? (
            <div className="header-page-tag" to="/">
              <img src={iconHouse} alt="House icon" />
              <h2>{currentPage}</h2>
            </div>
          ) : isInfo ? (
            <div className="header-page-tag">
              <img src={iconInfo} alt="Info icon" />
              <h2>{currentPage}</h2>
            </div>
          ) : (
            <>
              <Link className="header-page-tag" to="/">
                <img src={iconHouse} alt="House icon" />
              </Link>
              <div className="header-page-tag">
                <img src={iconLayers} alt="Layers icon" />
                <h2>{currentPage}</h2>
              </div>
            </>
          )}
        </div>
      </header>

      {/* <Sidebar currentPage={currentPage} shown={showSidebar} /> */}
      <div
        className="sidebar-mask"
        style={{ display: showSidebar ? "block" : "none" }}
        onClick={() => handleShowSidebar()}
      ></div>
    </>
  );
}

export default Header;
