import React, { useState } from "react";
import useSection from "Hooks/useSection";
import addIcon from "Images/add.png";
import "CSS/newSection.css";

function Construction() {
  const { addSection } = useSection();
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
    addSection({ name });
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
