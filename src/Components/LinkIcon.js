import React, { useContext, useState } from "react";
import services from "../Services/services";
import IconForm from "./IconForm";
import trash from "../Images/trash.svg";
import edit from "../Images/edit.svg";
import { Context } from "../App";
import "../CSS/linkIcon.css";

function LinkIcon(props) {
  const [hovered, setHovered] = useState(false);
  const toggleHovered = () => setHovered(!hovered);
  const context = useContext(Context);
  const [edition, setEdition] = useState(false);
  const deleteLink = async (e) => {
    e.preventDefault();
    await services.deleteLink(props.link, context.token);
  };
  const toggleEdition = (e) => {
    e.preventDefault();
    setEdition(!edition);
  };

  return (
    <a
      href={props.link.url}
      onMouseEnter={toggleHovered}
      onMouseLeave={toggleHovered}
      className={`linkIcon ${hovered && context.locked ? "scale" : ""}`}
    >
      <img alt={props.link.name} src={props.link.image} />
      <IconForm
        showing={edition}
        toggleEdition={toggleEdition}
        link={props.link}
      />
      {!context.locked ? (
        <div className="iconPanel">
          <img className="icon" src={edit} onClick={toggleEdition} alt="edit" />
          <img className="icon" src={trash} onClick={deleteLink} alt="trash" />
        </div>
      ) : (
        ""
      )}
      <div className="container">{props.link.name}</div>
    </a>
  );
}

export default LinkIcon;
