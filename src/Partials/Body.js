import React, { useState, useEffect } from "react";
import Section from "../Componenets/Section";
import "../CSS/body.css";

function Body() {
  const url = "http://localhost:3001/sections";
  // eslint-disable-next-line
  const [sections, setSections] = useState([]);

  const getSections = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setSections(data);
    console.log(data[0]);
  };

  useEffect(() => {
    getSections();
  }, []);

  return (
    <div className="body">
      {sections.map((section, key) => {
        return <Section key={key} section={section} />;
      })}
    </div>
  );
}

export default Body;
