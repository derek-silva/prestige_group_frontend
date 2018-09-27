import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import "../stylesheets/menus.scss";

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
};
export const MainMenu = () => (
  <nav className="nav-wrapper">
    <NavLink to="/" className="right">
      &nbsp;Home&nbsp;
    </NavLink>
    <NavLink to="/about" activeStyle={selectedStyle} className="right">
      &nbsp;About&nbsp;
    </NavLink>
    <NavLink to="/investors" activeStyle={selectedStyle} className="right">
      &nbsp;Investors&nbsp;
    </NavLink>
    <NavLink to="/news" activeStyle={selectedStyle} className="right">
      &nbsp;News&nbsp;
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle} className="right">
      &nbsp;Contact Us&nbsp;
    </NavLink>
    <NavLink to="/portfolio" activeStyle={selectedStyle} className="right">
      &nbsp;Portfolio&nbsp;
    </NavLink>
  </nav>
);
export const AboutMenu = ({ match }) => (
  <div className="about-menu">
    <li>
      <NavLink to="/about" style={match.isExact && selectedStyle}>
        [Company]
      </NavLink>
    </li>
  </div>
);

export default MainMenu;
