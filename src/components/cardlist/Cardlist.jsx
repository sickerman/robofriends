import React from "react";
import Card from "../card/Card.jsx";

import "./cardlist.css";

const Cardlist = ({ robots }) => {
  return (
    <div className="tc">
      <Card robots={robots} />
    </div>
  );
};

export default Cardlist;
