import React from "react";
import ReactDOM from "react-dom";
import CustomSelect from "./CustomSelect";
import "./styles.css";
import Examples from "./Examples";

function App() {
  return <Examples />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
