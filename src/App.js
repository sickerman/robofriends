import React from "react";
import Cardlist from "./components/cardlist/Cardlist";
import Searchbox from "./components/searchbox/Searchbox";
import "./App.css";

function App({ robots }) {
  handleChange;
  return (
    <div className="tc App">
      <h1>Robofriends.</h1>
      <Searchbox />

      <Cardlist robots={robots} />
    </div>
  );
}

export default App;
