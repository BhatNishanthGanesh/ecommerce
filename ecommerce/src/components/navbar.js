import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link to="/home" className="nav-logo">
            E-Commerce
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/checkout"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Checkout
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                activeClassName="active"
                className="nav-links"
              >
                SignIn / Register
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? Icons.faTimes : Icons.faBars} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;