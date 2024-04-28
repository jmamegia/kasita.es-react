import React, { useState } from "react";

const Context = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [locked, setLocked] = useState(true);
  let context = {
    token,
    locked,
    setToken,
    setLocked,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
export default Context;
