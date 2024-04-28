import React, { useContext } from "react";
import LinkIcon from "Components/LinkIcon";
import SectionPanel from "Components/SectionPanel";
import "CSS/section.css";
import AppContext from "Context/AppContext";

function Section(props) {
  const { locked } = useContext(AppContext);
  if (!locked || props.section.links.length > 0) {
    return (
      <div className={`section ${props.new ? "new" : ""}`}>
        {props.section.links.map((link, key) => (
          <LinkIcon key={link.id} link={link} />
        ))}
        {!locked ? <SectionPanel section={props.section} /> : ""}
      </div>
    );
  } else return "";
}

export default Section;
