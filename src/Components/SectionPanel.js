import React, { useState, useContext } from "react";
import services from "../Services/services";
import { Context } from "../App";
import "../CSS/SectionPanel.css";
import IconForm from "./IconForm";
import trash from "../Images/trash.svg";
import add from "../Images/addColor.png";

const SectionPanel = (props) => {
  const [edition, setEdition] = useState(false);
  const context = useContext(Context);
  const toggleEdition = (e) => {
    e.preventDefault();
    setEdition(!edition);
  };

  const deletePanel = (e) => {
    e.preventDefault();
    services.deleteSection(props.section, context.token);
  };
  return (
    <div className="SectionPanel">
      <div>
        <img className="icon" onClick={toggleEdition} src={add} alt="add" />
        <IconForm
          showing={edition}
          section={props.section}
          link={{}}
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
