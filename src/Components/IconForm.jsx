import React, { useState } from "react";
import useLink from "../Hooks/useLink";
import "CSS/UnlockForm.css";

function UnlockForm(props) {
  const [newLink, setNewLink] = useState(props.link);
  const { updtLink } = useLink();
  const sendForm = (e) => {
    props.toggleEdition(e);
<<<<<<< HEAD:src/Components/IconForm.jsx
    updtLink({ link: newLink, section: props.section });
=======
    let link = {
      newLink,
      section: props.section ? props.section._id : false,
    };
    updtLink(link);
>>>>>>> 777f799d44e54d567e6213fdca0bf293fa899646:src/Components/IconForm.js
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
