import React from "react";
import footercss from "./Footer.module.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={footercss["footer-container"]}>
      <section className={footercss["footer-subscription"]}>
        <p className={footercss["footer-subscription-heading"]}>
          Join the MADE WITH LEFTOVERS newsletter to receive seasonal recipes!
        </p>
      </section>
      <div class={footercss["footer-links"]}>
        <div className={footercss["footer-link-wrapper"]}>
          <div class={footercss["footer-link-items"]}>
            <h2>Leftovers?</h2>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/search-bar">Search Recipe</Link>
            <Link to="/services">Get Started</Link>
            <Link to="/favourites">Favourites</Link>
          </div>
          <div class={footercss["footer-link-items"]}>
            <h2>Contact Us</h2>
            <a href="https://www.gmail.com/">Contact Us</a>
            <a href="https://www.google.com/maps/@38.895616,-77.0473984,14z">
              Support
            </a>
            <a href="https://www.google.com/maps/@38.895616,-77.0473984,14z">
              Location
            </a>
          </div>
        </div>
        <div className={footercss["footer-link-wrapper"]}>
          <div class={footercss["footer-link-items"]}>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.youtube.com/">Youtube</a>
            <a href="https://www.twitter.com/">Twitter</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class={footercss["footer-logo"]}>
            <Link to="/" className="social-logo">
              MADE WITH LEFTOVERS
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">MADE WITH LEFTOVERS © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
