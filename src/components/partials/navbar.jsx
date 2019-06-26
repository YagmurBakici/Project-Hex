import React from "react";
import "bulma/css/bulma.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://www.hexagonmi.com/">
            <img src="./../logo.png" width="30" height="28" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <NavLink
              exact
              to="/"
              className="navbar-items"
              id="dropdown-element1"
            >
              CMM COMP
            </NavLink>

            <NavLink
              exact
              to="/CMM Selector"
              className="navbar-items"
              id="dropdown-element2"
            >
              CMM SELECTOR
            </NavLink>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Log In</strong>
                </a>
                <a class="button is-light">Admin</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
