import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* column 1 */}
            <div className="col-md-5 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>madewithleftovers@gmail.com</li>
                <li>xxx-xxx-xxxx</li>
                <li> USA</li>
              </ul>
            </div>
            {/* column 2 */}
            <div className="col-md-4 col-sm-6">
              <h4>Social Media </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
              </ul>
            </div>
            {/* column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>The Team</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/indu-goel-73685992/">
                    Indu Goel
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/samyukthagiridhar">
                    Samyuktha Giridhar
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Made with leftovers - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 1em;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 0rem;
    padding-bottom: 1rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLight);
  }
`;
