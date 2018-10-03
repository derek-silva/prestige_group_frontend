import { NavLink } from "react-router-dom";
import React from "react";

export const NavBar = props => (
  <nav className="nav-wrapper teal darken-4">
    <NavLink
      to="/"
      className="waves-effect waves-light home-button teal darken-4"
    >
      <img src={require("../images/whitelogofinal.jpg")} alt="" width="200" />
    </NavLink>
    {localStorage.getItem("jwt") ? (
      <NavLink
        to="/logout"
        className="right waves-effect waves-light button teal darken-4"
      >
        &nbsp;Log Out&nbsp;
      </NavLink>
    ) : (
      <NavLink
        to="/login"
        className="right waves-effect waves-light button teal darken-4"
      >
        &nbsp;Log In&nbsp;
      </NavLink>
    )}
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
    {localStorage.getItem("jwt") ? (
      <NavLink
        to="/portfolio"
        className="right waves-effect waves-light button teal darken-4"
      >
        &nbsp;Portfolio&nbsp;
      </NavLink>
    ) : (
      console.log("sign in to see portfolio")
    )}
    {localStorage.getItem("jwt") ? (
      <NavLink
        to="/trade"
        className="right waves-effect waves-light button teal darken-4"
      >
        &nbsp;Trade&nbsp;
      </NavLink>
    ) : (
      console.log("sign in to see portfolio")
    )}
  </nav>
);

export default NavBar;
