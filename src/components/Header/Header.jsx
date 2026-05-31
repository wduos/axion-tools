import "./Header.css";
import logoImg from "../../assets/logo.svg";
import iconBars from "../../assets/icons/bars.svg";
import iconHouse from "../../assets/icons/house.svg";
import iconLayers from "../../assets/icons/layers.svg";
import iconInfo from "../../assets/icons/info.svg";
import Sidebar from "../../components/Sidebar/Sidebar";
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
        <button type="button" onClick={() => handleShowSidebar()}>
          <img src={iconBars} alt="Staggered bars icon" />
          <img src={logoImg} alt="Axion's logo" />
        </button>

        <div className="header-right">
          <div>
            {isHome ? (
              <img src={iconHouse} alt="House icon" />
            ) : isInfo ? (
              <img src={iconInfo} alt="Info icon" />
            ) : (
              <img src={iconLayers} alt="Layers icon" />
            )}
            <h2>{currentPage}</h2>
          </div>
        </div>
      </header>

      <Sidebar currentPage={currentPage} shown={showSidebar} />
      <div
        className="sidebar-mask"
        style={{ display: showSidebar ? "block" : "none" }}
        onClick={() => handleShowSidebar()}
      ></div>
    </>
  );
}

export default Header;
