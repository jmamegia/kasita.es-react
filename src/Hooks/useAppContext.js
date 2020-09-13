import React, { useContext } from "react";
import AppContext from "../Context/AppContext";

export default () => {
  const { token, locked, setTocken, setLocked } = useContext(AppContext);
};
