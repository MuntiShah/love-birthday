import React from "react";
import "./Text.css";
export default function Text(props) {
  return (
    <div className="container my-1">
      <div className={`text-${props.mode === "dark" ? "black" : "white"}`}>
        <h3 className="font">Happy Birthday My Love Tooba</h3>
      </div>
    </div>
  );
}
