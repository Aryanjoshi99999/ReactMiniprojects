import React from "react";
import logo from "../img/logo.png";
export default function Navbar() {
  return (
    <nav className="Navbar-nav">
      <img src={logo} className="Navbar-img" />
      <h3 className="Navbar-heading">ReactFacts</h3>
      <h4 className="Navbar-pro">React project-1</h4>
    </nav>
  );
}
