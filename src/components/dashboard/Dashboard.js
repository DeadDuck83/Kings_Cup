import React from "react";
import Notifications from "./Notifications";
import GameList from "../games/GameList";
import Jumbotron from "./Jumbotron";
import { connect } from "react-redux";

const Dashboard = ({ games }) => {
  return (
    <div className="dashboard section">
      <Jumbotron />
      <Notifications />
      <GameList games={games} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    games: state.game.games,
  };
};

export default connect(mapStateToProps)(Dashboard);
