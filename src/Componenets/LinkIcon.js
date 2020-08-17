import React from "react";
import "../CSS/LinkIcon.css";

function LinkIcon(props) {
  return (
    <img
      className={props.className}
      alt={props.alt}
      src={props.src}
      width={props.width}
      height={props.height}
    />
  );
}

export default LinkIcon;
