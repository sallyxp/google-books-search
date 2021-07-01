import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 50, clear: "both", paddingTop: 50,  textAlign: "center", color: "white" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;