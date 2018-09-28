import { NavLink } from "react-router-dom";
import React from "react";

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
};

export const NavBar = props => (
  <nav className="nav-wrapper teal darken-4">
    <NavLink
      to="/"
      className="waves-effect waves-light btn-large teal darken-4"
    >
      &nbsp;PRESTIGE GROUP LP&nbsp;
    </NavLink>
    <NavLink
      to="/login"
      activeStyle={selectedStyle}
      className="right waves-effect waves-light btn-large teal darken-4"
    >
      &nbsp;Log In&nbsp;
    </NavLink>
    <NavLink
      to="/contact"
      activeStyle={selectedStyle}
      className="right waves-effect waves-light btn-large teal darken-4"
    >
      &nbsp;Contact Us&nbsp;
    </NavLink>
    <NavLink
      to="/news"
      activeStyle={selectedStyle}
      className="right waves-effect waves-light btn-large teal darken-4"
    >
      &nbsp;News&nbsp;
    </NavLink>
    {props.loggedInUser ? (
      <NavLink
        to="/portfolio"
        activeStyle={selectedStyle}
        className="right waves-effect waves-light btn-large teal darken-4"
      >
        &nbsp;Portfolio&nbsp;
      </NavLink>
    ) : (
      console.log("no user")
    )}
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

export default NavBar;
