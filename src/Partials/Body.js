import React, { useState, useEffect } from "react";
import Section from "../Componenets/Section";
import "../CSS/body.css";

function Body() {
  const [sections, setSections] = useState([]);
  const getSections = async () => {
    const res = await fetch(process.env.REACT_APP_API_URL);
    const data = await res.json();
    setSections(data);
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
