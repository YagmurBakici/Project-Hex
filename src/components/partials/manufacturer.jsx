import React, { Component } from "react";
import "../../App.css";

export default class manufacturer extends Component {
  render() {
    return (
      <div>
        <select className="dropdown">
          <option value="">Manufacturer</option>
          <option value="x">X</option>
          <option value="y">Y</option>
          <option value="z">Z</option>
          <option value="q">Q</option>
        </select>
      </div>
    );
  }
}
