import React, { Component } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Pictures/logo.png";
import "./styles.css";

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">
      <div>
        <blockquote class="blockquote text-center">
          <img className="photo" src={logo} alt="Made with leftovers" />
        </blockquote>
      </div>
    </div>
    <div className="navbar__item">
      <a href="/Home" style={{ color: "white" }}>
        {" "}
        Home
      </a>
    </div>

    <div className="navbar__item">
      <a href="/Contact" style={{ color: "white" }}>
        Contact
      </a>
    </div>
    <div className="navbar__item">
      <a href="/Help" style={{ color: "white" }}>
        {" "}
        Help
      </a>
    </div>
  </header>
);

export default NavBar;

const FooterContainer = styled.footer`
  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLight);
  }
`;
