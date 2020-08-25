import React, { useContext, useState } from "react";

import "../CSS/UnlockForm.css";
import { Context } from "../App";

function UnlockForm(props) {
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const context = useContext(Context);
  const url = process.env.REACT_APP_API_URL;
  const sendForm = async (e) => {
    e.preventDefault();
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      method: "PUT",
    };
    let res = await fetch(`${url}/login`, options);
    let data = await res.json();
    if (data) {
      context.setToken(data);
      context.toggleLock();
      props.toggleForm();
    }
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    let newvalues = { ...credentials, [key]: value };
    setCredentials(newvalues);
  };
  return (
    <div className={`formContainer ${props.showing ? "show" : "hide"}`}>
      <label htmlFor="uname">
        <b>Username</b>
      </label>
      <input
        type="text"
        placeholder="name"
        name="name"
        required
        value={credentials.name}
        onChange={onChangeHandler}
        autoFocus
      ></input>
      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        value={credentials.password}
        name="password"
        onChange={onChangeHandler}
        required
      ></input>
      <button type="submit" onClick={sendForm}>
        {context.locked ? "Unlock" : "Lock"}
      </button>
    </div>
  );
}

export default UnlockForm;
