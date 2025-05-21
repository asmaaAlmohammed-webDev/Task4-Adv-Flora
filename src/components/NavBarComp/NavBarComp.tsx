import { useState } from "react";
import menuIcon from "./../../assets/imgs/menue-nav.svg";
import closeIcon from "./../../assets/imgs/Exit-nav.svg";
import type { NavLink } from "../../data/NavBarData";
import "./NavBarComp.css";

interface NavBarProps {
  logo: string;
  links: NavLink[];
}

const NavBarComp = ({ logo, links }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo-img" className="logo" />

      <button className="menu-toggle" onClick={handleToggleMenu}>
        <img src={menuOpen ? closeIcon : menuIcon} alt="menu" />
      </button>

      <ul className={`items ${menuOpen ? "open" : ""}`}>
        {links?.map((item) => (
          <li
            key={item.name}
            className={`item ${activeItem === item.name ? "active" : ""}`}
            onClick={() => handleItemClick(item.name)}
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}

        <li className="mobile-login" onClick={() => setMenuOpen(false)}>
          <button className="login-btn">Login</button>
        </li>
      </ul>

      <button className="login-btn desktop-only">Login</button>
    </nav>
  );
};

export default NavBarComp;
