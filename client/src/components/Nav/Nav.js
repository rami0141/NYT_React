import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container">
    <a className="navbar-brand ml-4 text-info" href="#">NYT React</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link text-info" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">NoMatch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Saved</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
);

export default Nav;
