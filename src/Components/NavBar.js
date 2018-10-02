import { NavLink } from "react-router-dom";
import React from "react";

export const NavBar = props => (
  <nav className="nav-wrapper teal darken-4">
    <NavLink
      to="/"
      className="waves-effect waves-light home-button teal darken-4"
    >
      {/*&nbsp;PRESTIGE GROUP LP&nbsp;*/}
      <img src={require("../images/whitelogofinal.jpg")} alt="" width="200"/>
    </NavLink>
    <NavLink
      to="/login"
      className="right waves-effect waves-light button teal darken-4"
    >
      &nbsp;Log In&nbsp;
    </NavLink>
    <NavLink
      to="/contact"
      className="right waves-effect waves-light button teal darken-4"
    >
      &nbsp;Contact Us&nbsp;
    </NavLink>
    <NavLink
      to="/news"
      className="right waves-effect waves-light button teal darken-4"
    >
      &nbsp;News&nbsp;
    </NavLink>
    {props.loggedInUser ? (
      <NavLink
        to="/portfolio"
        className="right waves-effect waves-light button teal darken-4"
      >
        &nbsp;Portfolio&nbsp;
      </NavLink>
    ) : (
      console.log("sign in to see portfolio")
    )}
  </nav>
);

export default NavBar;
