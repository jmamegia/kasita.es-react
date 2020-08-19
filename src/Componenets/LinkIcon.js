import React from "react";
import "../CSS/linkIcon.css";

function LinkIcon(props) {
  return (
    <a href={props.link.url} className="linkIcon">
      <img alt={props.link.alt} src={props.link.image} />
      <div className="container">{props.link.name}</div>
    </a>
  );
}

export default LinkIcon;
