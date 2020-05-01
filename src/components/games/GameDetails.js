import React from "react";
import GameNotifications from "./GameNotifications";
//connect to fireBase and Redux
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const GameDetails = (props) => {
  console.log("Reached Component Props: ", props);
  const { game } = props;

  if (!game) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  } else {
    return (
      <div className="section game-details">
        <div className="container">
          <h1>Game ID = </h1>
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
  }
};

// //set up Props from Firebase
// const mapStateToProps = (state, propsOfComponent) => {
//   const id = propsOfComponent.match.params.id;
//   console.log("1. map state id: ", id);
//   const games = state.firestore.data.games;
//   console.log("2. map state games: ", games);
//   const game = games ? games[id] : "hold please";
//   return {
//     game: game,
//   };
// };

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {
//       collection: "games",
//     },
//   ])
// )(GameDetails);

// ------- from tutorial repo: ---------

const mapStateToProps = (state, ownProps) => {
  console.log("state: ", state);
  const gameId = ownProps.match.params.id;

  console.log("id", gameId);
  const games = state.firestore.ordered.games && state.firestore.ordered.games;

  console.log("games", games);
  const game = games ? games[gameId] : null;
  // const game = games ?? games.find((game) => game.id === gameId);

  console.log("game --- ", game);
  return {
    game: game,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "games" }])
)(GameDetails);
