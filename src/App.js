import React from "react";
import { SectionsContextProvider } from "./Context/SectionsContext";
import { AppContextProvider } from "./Context/AppContext";
import Head from "./Partials/Head";
import Body from "./Partials/Body";
import Foot from "./Partials/Foot";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Head />
        <SectionsContextProvider>
          <Body />
        </SectionsContextProvider>
      </AppContextProvider>
      <Foot />
    </div>
  );
}

export default App;
