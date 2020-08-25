import React, { useContext } from "react";
import LinkIcon from "./LinkIcon";
import SectionPanel from "./SectionPanel";
import "../CSS/section.css";
import { Context } from "../App";

function Section(props) {
  const context = useContext(Context);
  return (
    <div className={`section ${props.new ? "new" : ""}`}>
      {props.section.links.map((link, key) => (
        <LinkIcon key={key} link={link} />
      ))}
      {!context.locked ? <SectionPanel section={props.section} /> : ""}
    </div>
  );
}

export default Section;
