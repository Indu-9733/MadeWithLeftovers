import React from "react";
import "../App.css";
import { GetStartedButton } from "./GetStartedButton";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>START COOKING TODAY</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <GetStartedButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </GetStartedButton>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH VIDEOS <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
