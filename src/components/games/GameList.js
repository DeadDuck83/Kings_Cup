import React from "react";
import GameSummary from "./GameSummary";

const GameList = ({ games }) => {
  return (
    <div className="game-list container">
      <div className="row">
        {games &&
          games.map((game) => {
            return <GameSummary game={game} key={game.id} />;
          })}
      </div>
    </div>
  );
};

export default GameList;
