import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { robots } from "./robots";
import "tachyons";

ReactDOM.render(
  <React.StrictMode>
    <App robots={robots} />
  </React.StrictMode>,
  document.getElementById("root")
);
