import "./SidebarItem.css";
import { Link } from "react-router-dom";

function SidebarItem({ title, current, linksTo }) {
  return (
    <Link
      to={linksTo}
      className={current ? "SidebarItem current" : "SidebarItem"}
    >
      <h4>{title}</h4>
    </Link>
  );
}

export default SidebarItem;
