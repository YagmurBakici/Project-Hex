import React, { Component } from "react";
import "../../App.css";

export default class size extends Component {
  render() {
    return (
      <div>
        <select className="dropdown">
          <option value="">Size</option>
          <option value="x">X</option>
          <option value="y">Y</option>
          <option value="z">Z</option>
          <option value="q">Q</option>
        </select>
      </div>
    );
  }
}
