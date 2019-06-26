import React, { Component } from "react";
import "../../App.css";

export default class machine extends Component {
  render() {
    return (
      <div>
        <select class="dropdown">
          <option value="">Machine</option>
          <option value="x">X</option>
          <option value="y">Y</option>
          <option value="z">Z</option>
          <option value="q">Q</option>
        </select>
      </div>
    );
  }
}
