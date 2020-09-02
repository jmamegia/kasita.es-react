import React, { useState, useEffect } from "react";
import services from "./Services/services";
import Head from "./Partials/Head";
import Body from "./Partials/Body";
import Foot from "./Partials/Foot";
import "./CSS/App.css";

export const Context = React.createContext();

function App() {
  const [locked, setLocked] = useState(true);
  const [token, setToken] = useState("");
  const [sections, setSections] = useState([]);
  const toggleLock = () => setLocked(!locked);

  const getSections = async () => {
    const data = await services.getSections();
    setSections(data);
  };
  const context = {
    locked,
    sections,
    token,
    toggleLock,
    getSections,
    setToken,
  };
  useEffect(() => {
    getSections();
  });

  return (
    <div className="App">
      <Context.Provider value={context}>
        <Head />
        <Body />
      </Context.Provider>
      <Foot />
    </div>
  );
}

export default App;
