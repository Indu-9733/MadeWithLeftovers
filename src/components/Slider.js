import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import "./Style.css";

export default class Sliders extends Component {
  constructor(props) {
    super(props);
  }

  handleSlide = (e, newvalue) => {
    this.props.onSlidefunc(e, newvalue);
  };

  render() {
    return (
      <div>
        <div id="config-slider" className="sld" style={{ width: 100 }}>
          <Slider
            value={this.props.value}
            min={this.props.min}
            max={this.props.max}
            step={1}
            onChange={this.handleSlide}
          />
        </div>
      </div>
    );
  }
}
