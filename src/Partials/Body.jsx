import React, { useContext } from "react";
import Section from "../Components/Section";
import NewSection from "../Components/NewSection";
import AppContext from "../Context/AppContext";
import useSection from "../Hooks/useSection";

import "../CSS/body.css";

function Body() {
  const { locked } = useContext(AppContext);
  const { sections } = useSection();
  return (
    <div className="body">
      {sections.map((section, key) => {
        return <Section className="section" key={key} section={section} />;
      })}
      {!locked ? <NewSection section={{ name: "New", links: [] }} /> : ""}
    </div>
  );
}

export default Body;
