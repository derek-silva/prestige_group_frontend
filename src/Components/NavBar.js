import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import "../stylesheets/menus.scss";

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
};
export const MainMenu = () => (
  <nav className="main-menu">
    <NavLink to="/">[Home]</NavLink>
    <NavLink to="/about" activeStyle={selectedStyle}>
      [About]
    </NavLink>
    <NavLink to="/investors" activeStyle={selectedStyle}>
      [Investors]
    </NavLink>
    <NavLink to="/news" activeStyle={selectedStyle}>
      [News]
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle}>
      [Contact Us]
    </NavLink>
    <NavLink to="/portfolio" activeStyle={selectedStyle}>
      [Portfolio]
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
