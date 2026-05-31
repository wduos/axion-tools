import "./Sidebar.css";
import SidebarItem from "../SidebarItem/SidebarItem";
import logoShieldImg from "../../assets/logo-shield.svg";
import iconHouse from "../../assets/icons/house.svg";
import iconLayers from "../../assets/icons/layers.svg";

function Sidebar({ currentPage, shown }) {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Inspectr", path: "/inspectr" },
    { name: "Info", path: "/info" },
  ];

  return (
    <aside className={shown ? "Sidebar show" : "Sidebar"}>
      <div className="sidebar-head">
        <img src={logoShieldImg} alt="Axion's logo" />
        <h1>Axion</h1>
        <small className="dim center">
          Tools and helpers for Operations and Administration
        </small>
      </div>
      <div className="page-list">
        {pages.map((page, index) => (
          <SidebarItem
            current={page.name === currentPage}
            title={page.name}
            linksTo={page.path}
            key={index}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
