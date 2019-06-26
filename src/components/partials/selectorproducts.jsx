import "./selector.css";
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
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="reply">
                  <span class="icon is-small">
                    <i class="fas fa-reply" aria-hidden="true" />
                  </span>
                </a>
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small">
                    <i class="fas fa-retweet" aria-hidden="true" />
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small">
                    <i class="fas fa-heart" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    );
  }
}
