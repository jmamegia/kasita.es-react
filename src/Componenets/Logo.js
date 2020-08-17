import React from "react";
import logoSVG from "../Images/kasita.svg";

function Logo(props) {
  var style = {
    pading: "0",
    margin: "0",
  };
  return (
    <img
      className={props.className}
      alt={props.alt}
      src={logoSVG}
      width={props.width}
      height={props.height}
      style={style}
    />
  );
}

export default Logo;
