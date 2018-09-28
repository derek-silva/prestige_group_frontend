import { NavLink } from "react-router-dom";
import React from "react";

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
};

export const NavBar = props => (
  <nav className="nav-wrapper  indigo">
    <NavLink to="/">&nbsp;PRESTIGE GROUP LP&nbsp;</NavLink>
    <NavLink to="/login" activeStyle={selectedStyle} className="right">
      &nbsp;Log In&nbsp;
    </NavLink>
    <NavLink to="/about" activeStyle={selectedStyle} className="right">
      &nbsp;About&nbsp;
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle} className="right">
      &nbsp;Contact Us&nbsp;
    </NavLink>
    <NavLink to="/news" activeStyle={selectedStyle} className="right">
      &nbsp;News&nbsp;
    </NavLink>
    {props.loggedInUser ? (
      <NavLink to="/portfolio" activeStyle={selectedStyle} className="right">
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
