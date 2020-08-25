import React from "react";
import Logo from "../Components/Logo";
import "../CSS/head.css";

function Head() {
  return (
    <div className="head">
      <Logo
        className="App-logo"
        alt="<a href='https://icons8.com/icon/12229/casa'>Casa icon by Icons8</a>"
        width="60vw"
        height="60vw"
      />
      <h2 className="title">Kasita.es</h2>
    </div>
  );
}

export default Head;
