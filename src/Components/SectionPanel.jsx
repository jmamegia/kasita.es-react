import React, { useState } from "react";
import useSection from "../Hooks/useSection";
import "CSS/SectionPanel.css";
import IconForm from "Components/IconForm";
import trash from "Images/trash.svg";
import add from "Images/addColor.png";

const SectionPanel = (props) => {
  const [edition, setEdition] = useState(false);
  const { delSection } = useSection();
  const toggleEdition = (e) => {
    e.preventDefault();
    setEdition(!edition);
  };

  const deletePanel = (e) => {
    e.preventDefault();
    delSection(props.section);
  };
  return (
    <div className="SectionPanel">
      <div>
        <img className="icon" onClick={toggleEdition} src={add} alt="add" />
        <IconForm
          showing={edition}
          section={props.section}
          link={{ name: "" }}
          toggleEdition={toggleEdition}
        />
      </div>
      <div>
        <img className="icon" onClick={deletePanel} src={trash} alt="trash" />
      </div>
    </div>
  );
};

export default SectionPanel;
