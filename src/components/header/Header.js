import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./header.css";

function Header() {
  return (
    <header className="kasa_header">
      <img src={logo} alt="kasa" className="kasa_logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
