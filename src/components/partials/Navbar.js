import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue-grey darken-4">
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              Articulos Pers
            </Link>
            <Link to="/#" data-target="mobile" className="sidenav-trigger">
              <i className="fa fa-hamburger"></i>
            </Link>
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
