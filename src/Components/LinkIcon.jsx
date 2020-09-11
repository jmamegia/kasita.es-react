import React, { useContext, useState } from "react";
import useLink from "../Hooks/useLink";
import IconForm from "Components/IconForm";
import trash from "Images/trash.svg";
import edit from "Images/edit.svg";
import AppContext from "../Context/AppContext";
import "CSS/linkIcon.css";

function LinkIcon(props) {
  const { delLink } = useLink();
  const [hovered, setHovered] = useState(false);
  const toggleHovered = () => setHovered(!hovered);
  const { locked } = useContext(AppContext);
  const [edition, setEdition] = useState(false);
  const deleteLink = (e) => {
    e.preventDefault();
    delLink(props.link);
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
      className={`linkIcon ${hovered && locked ? "scale" : ""}`}
    >
      <img alt={props.link.name} src={props.link.image} />
      <IconForm
        showing={edition}
        toggleEdition={toggleEdition}
        link={props.link}
      />
      {!locked ? (
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
