import React, { useState, useContext } from "react";
import services from "../Services/services";
import addIcon from "../Images/add.png";
import { Context } from "../App";
import "../CSS/newSection.css";

function Construction() {
  const context = useContext(Context);
  const [sectionForm, setSectionForm] = useState(false);
  const [name, setName] = useState("");
  const toggleSectionForm = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setSectionForm(false);
  };
  const sendForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSectionForm(false);
    services.updateSection({ name }, context.token);
  };
  const onChangeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <div
      className={`newSection ${sectionForm ? "showingForm" : "hiddingForm"}`}
      onClick={() => setSectionForm(true)}
    >
      <img className={`addIcon`} src={addIcon} alt="add" />

      <form className={`form ${sectionForm ? "fshow" : "fhide"}`}>
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
