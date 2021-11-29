import React from "react";
import "../App.css";
import { GetStartedButton } from "./GetStartedButton";
import { Button } from "./Button";
import herocss from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={herocss['hero-container']}>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>START COOKING TODAY</h1>
      <p>What are you waiting for?</p>
      <div className={herocss['hero-btns']}>
        <GetStartedButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </GetStartedButton>
        
      </div>
    </div>
  );
}

export default HeroSection;
