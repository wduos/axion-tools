import "./Sidebar.css";
import SidebarItem from "../SidebarItem/SidebarItem";
import logoShieldImg from "../../assets/logo-shield.svg";
import iconHouse from "../../assets/icons/house.svg";
import iconLayers from "../../assets/icons/layers.svg";

function Sidebar({ currentPage }) {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Inspectr", path: "/inspectr" },
    { name: "Info", path: "/info" },
  ];

  return (
    <aside className="Sidebar">
      <div className="sidebar-head">
        <img src={logoShieldImg} alt="Axion's logo" />
        <h1>Axion</h1>
      </div>
      <div className="page-list">
        {pages.map((page) => (
          <SidebarItem
            current={page.name === currentPage}
            title={page.name}
            linksTo={page.path}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
