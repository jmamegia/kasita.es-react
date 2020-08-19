import React from "react";
import LinkIcon from "./LinkIcon";
import "../CSS/section.css";

function Section(props) {
  return (
    <div className="section">
      {props.section.links.map((link, key) => (
        <LinkIcon key={key} link={link} />
      ))}
    </div>
  );
}

export default Section;
