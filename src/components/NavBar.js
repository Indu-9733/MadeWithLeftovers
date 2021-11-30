import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Button2 } from "./Button2";
import { SignoutBtn } from "./SignoutBtn";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Axios from "axios";

function Navbar() {
  Axios.defaults.withCredentials = true;
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) setIsLoggedIn(true);
    });
  });

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  if (!isLoggedIn) {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              MADE WITH LEFTOVERS
              <i class="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/search-bar"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Add Your Own Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/favourites"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Favourites
                </Link>
              </li>

              <li>
                <Link
                  to="/sign-in"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">SIGN IN</Button>}
            {button && <Button2 buttonStyle="btn--outline">SIGN UP</Button2>}
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              MADE WITH LEFTOVERS
              <i class="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/search-bar"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Add Your Own Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/favourites"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Favourites
                </Link>
              </li>

              <li>
                <Link
                  to="/sign-out"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
            {button && (
              <SignoutBtn buttonStyle="btn--outline">SIGN OUT</SignoutBtn>
            )}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
