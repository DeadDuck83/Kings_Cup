import React from "react";

import GameNotifications from "./GameNotifications";

const GameDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="section game-details">
      <div className="container">
        <h1>Game ID = {id}</h1>
        <p>Game content. And discrption. Much to say about this section.</p>
        <h4>Game Players:</h4>
        <p className="btn btn-floating pink lighten-1">DM</p>
      </div>
      <div>
        <GameNotifications />
      </div>
      <div className="card-deck">Deck of cards displayed here</div>
    </div>
  );
};

export default GameDetails;
