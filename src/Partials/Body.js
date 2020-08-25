import React, { useContext } from "react";
import Section from "../Components/Section";
import NewSection from "../Components/NewSection";
import { Context } from "../App";
import "../CSS/body.css";

function Body() {
  const context = useContext(Context);

  return (
    <div className="body">
      {context.sections.map((section, key) => {
        return <Section className="section" key={key} section={section} />;
      })}
      {!context.locked ? (
        <NewSection section={{ name: "New", links: [] }} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Body;
