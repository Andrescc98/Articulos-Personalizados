import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              Articulos Pers
            </Link>
            <a href="#" data-target="mobile" className="sidenav-trigger">
              <i className="fa fa-hamburger"></i>
            </a>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Inicio</Link></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile">
            <li><Link to="/">Inicio</Link></li>
        </ul>
      </div>
    );
  }
}
