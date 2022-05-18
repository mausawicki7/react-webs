import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import "../styles/Logo.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <div className="navbar-brand">
          <img
            src="src/assets/img/logos-coderhouse-01.png"
            width="20%"
            className="d-inline-block align-top logo-img"
            alt="Logo"
          ></img>
        </div>
      </Link>


      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categorías
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <div className="dropdown-item">
                <NavLink className="nav-link" to="/category/1">
                  Categoria 1
                </NavLink>
              </div>
              <div className="dropdown-item">
              <NavLink className="nav-link" to="/category/2">
                Categoria 2
              </NavLink>
              </div>
              <div className="dropdown-item">
              <NavLink className="nav-link" to="/category/3">
                Categoria 3
              </NavLink>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <CartWidget />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
