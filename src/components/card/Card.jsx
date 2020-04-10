import React from "react";

import "./card.css";

const Card = ({ robots }) => {
  const arr = robots.map((robot, i) => (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="robots"
        src={`https://robohash.org/${robots[i].id}&size=200x200`}
      />
      <h2>{robots[i].name}</h2>
      <p>{robots[i].email}</p>
    </div>
  ));
  return <div>{arr}</div>;
};

export default Card;
