import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container">
    <Link className="navbar-brand ml-4 text-info" to="/">NYT React</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link text-info mr-4" to="/">SEARCH</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info" to="/saved">SAVED ARTICLES</Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
);

export default Nav;
