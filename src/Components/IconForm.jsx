import React, { useState } from "react";
import { useLink } from "../Hooks/useLink";
import "CSS/UnlockForm.css";

function UnlockForm(props) {
  const [newLink, setNewLink] = useState(props.link);
  const { updtLink } = useLink();
  const sendForm = (e) => {
    props.toggleEdition(e);
    updtLink({ link: newLink, section: props.section });
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    let newvalues = { ...newLink, [key]: value };
    setNewLink(newvalues);
  };

  return (
    <div
      className={`formContainer ${props.showing ? "show" : "hide"}`}
      onClick={(e) => e.preventDefault()}
    >
      <label htmlFor="name">
        <b>Name</b>
      </label>
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        value={newLink.name || ""}
        autoFocus
        onChange={onChangeHandler}
        required
      ></input>
      <label htmlFor="link">
        <b>Link</b>
      </label>
      <input
        type="text"
        placeholder="Enter link"
        name="url"
        value={newLink.url || ""}
        onChange={onChangeHandler}
        required
      ></input>
      <label htmlFor="image">
        <b>Image</b>
      </label>
      <input
        type="text"
        placeholder="Enter image URL"
        value={newLink.image || ""}
        onChange={onChangeHandler}
        name="image"
      ></input>
      <button onClick={sendForm} style={{ backgroundColor: "navy" }}>
        Send
      </button>
      <button onClick={props.toggleEdition}>Cancel</button>
    </div>
  );
}

export default UnlockForm;
