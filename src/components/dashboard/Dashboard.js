import React from "react";
import Notifications from "./Notifications";
import GameList from "../games/GameList";
import Jumbotron from "./Jumbotron";
import { connect } from "react-redux";
// Use this one to BIND to react
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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
  console.log("state from firebase: ", state);
  return {
    games: state.firestore.ordered.games,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "games" }])
)(Dashboard);
