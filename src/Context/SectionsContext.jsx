import React, { useState } from "react";

const Context = React.createContext();

export function SectionsContextProvider({ children }) {
  const [sections, setSections] = useState([]);
  let context = {
    sections,
    setSections,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
}
export default Context;
