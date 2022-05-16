import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to = "/"><a className="navbar-brand">
        <img
          src="src/assets/img/logos-coderhouse-01.png"
          width="20%"
          className="d-inline-block align-top"
          alt="Logo"
        ></img>
        
      </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Planes
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Opciones
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link">
            <CartWidget />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
