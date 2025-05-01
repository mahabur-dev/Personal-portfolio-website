import { useState } from "react";
import {NavLink } from "react-router-dom";
import "../header.css";

const Header = () => {
  const [openMenu, setMenu] = useState(false);
  return (
    <nav>
      <div className="nav_bar">
        <div>
          <h1>Mahabur Rahman</h1>
        </div>
        <ul className={openMenu ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={() => setMenu(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenu(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" onClick={() => setMenu(false)}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={() => setMenu(false)}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setMenu(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" onClick={() => setMenu(false)}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./images/Mahabur_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenu(false)}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/contract" onClick={() => setMenu(false)}>
              Contract
            </NavLink>
          </li>
        </ul>

        <div className="menu_bar">
          <img src="./images/menu_bar.png" onClick={() => setMenu(!openMenu)} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
