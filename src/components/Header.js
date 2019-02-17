import React, { Component } from "react";
import logo from "../resources/aliorbank.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light pl-0 pt-0 pb-0">
        <a className="navbar-brand p-0" href="/">
          <img src={logo} alt="Alior Bank" className="Header-logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">Tokenizing money on GTS platform</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
