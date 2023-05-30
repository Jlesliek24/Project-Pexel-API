import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import { navbardata } from "./navbardata";

export default function Navbar() {
  const [sidebar, setsidebar] = useState(false);
  const showsidebar = () => setsidebar(!sidebar);

  return (
    <>
        <div className="navbar">
          <Link to="#" className="menu-bar">
            <span onClick={showsidebar}>☰</span>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-item">
            <li className="nav-toggle">
              <Link to="#" className="nav-menu-item">
                <span>X</span>
              </Link>
            </li>
            {navbardata.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      <footer>
        <p>
          Hello and Welcome to this website and Please use as much as you want.
        </p>
      </footer>
    </>
  );
}
