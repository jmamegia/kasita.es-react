import React, { useState, useContext } from "react";
import services from "../Services/services";
import addIcon from "../Images/add.png";
import { Context } from "../App";
import "../CSS/newSection.css";

function Construction() {
  const context = useContext(Context);
  const toggleSectionForm = (e) => {
    e.preventDefault();
    setSectionForm(!sectionForm);
  };
  const sendForm = (e) => {
    e.preventDefault();
    services.updateSection({ name }, context.token);
  };
  const [sectionForm, setSectionForm] = useState(false);
  const [name, setName] = useState("");
  const onChangeHandler = (e) => {
    setName(e.target.value);
  };
  return !sectionForm ? (
    <div className="newSection" onClick={toggleSectionForm}>
      <img className="addIcon" src={addIcon} alt="add" />
    </div>
  ) : (
    <div className="newSection form">
      <form className={`${setSectionForm ? "show" : "hide"}`}>
        <div>
          <label htmlFor="name">
            <b>Name </b>
          </label>
        </div>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={onChangeHandler}
          required
          autoFocus
        ></input>
        <div className="buttons">
          <button onClick={sendForm} style={{ backgroundColor: "navy" }}>
            Send
          </button>
          <button onClick={toggleSectionForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Construction;
