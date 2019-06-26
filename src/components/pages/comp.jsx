import "./comp.css";
import "bulma/css/bulma.css";
import React, { Component } from "react";

export default class comp extends Component {
  render() {
    return (
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src={this.props.image} alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{this.props.name}</strong> <small>Numero</small>{" "}
                <small>Info</small>
                <br /> Info1: {this.props.Info1}
                <br /> Info2:{this.props.Info2}
                <br /> Info3:{this.props.Info3}
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
