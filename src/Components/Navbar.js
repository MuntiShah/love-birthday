import React from "react";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <img
          src="./Images/Toobalogo.png"
          alt=""
          width="50"
          height="40"
          className="d-inline-block align-text-top mx-1"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <di className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"></a>
            </li>
          </ul>
        </di>

        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "black" : "white"
          }`}
        >
          <input
            className="form-check-input"
            onClick={props.handleMode}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Love Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
