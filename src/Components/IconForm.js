import React, { useState, useContext } from "react";
import { Context } from "../App";
import services from "../Services/services";
import "../CSS/UnlockForm.css";

function UnlockForm(props) {
  const [newLink, setNewLink] = useState(props.link);
  const context = useContext(Context);
  const sendForm = (e) => {
    props.toggleEdition(e);
    services.updateLink(
      {
        link: newLink,
        section: props.section ? props.section._id : false,
      },
      context.token
    );
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
        value={props.link ? newLink.name : ""}
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
        value={props.link ? newLink.url : ""}
        onChange={onChangeHandler}
        required
      ></input>
      <label htmlFor="link">
        <b>Image</b>
      </label>
      <input
        type="text"
        placeholder="Enter image URL"
        value={props.link ? newLink.image : ""}
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
