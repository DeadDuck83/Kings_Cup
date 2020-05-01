import React from "react";
import GameSummary from "./GameSummary";
import { Link } from "react-router-dom";

const GameList = ({ games }) => {
  return (
    <div className="game-list container">
      <div className="row">
        {games &&
          games.map((game) => {
            return (
              <Link key={game.id} to={"/game/" + game.id}>
                <GameSummary game={game} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default GameList;
