import React, { useState, useContext } from "react";
import "CSS/UnlockForm.css";
import useLogin from "../Hooks/useLogin";
import AppContext from "../Context/AppContext";

function UnlockForm(props) {
  const { getLogin } = useLogin();
  const { locked } = useContext(AppContext);
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const sendForm = async (e) => {
    e.preventDefault();
    props.toggleForm();
    getLogin(credentials);
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    let newvalues = { ...credentials, [key]: value };
    setCredentials(newvalues);
  };
  return (
    <form
      onSubmit={sendForm}
      className={`formContainer ${props.showing ? "show" : "hide"}`}
    >
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
      <button type="submit">{locked ? "Unlock" : "Lock"}</button>
    </form>
  );
}

export default UnlockForm;
