import React, { useState, useEffect } from "react";
import Jumbotron from "../dashboard/Jumbotron";
import { connect } from "react-redux";
import { createGame } from "../../store/actions/gameActions";
import { v4 as uuidv4 } from "uuid";

const CreateGame = (props) => {
  const [session, setSession] = useState("");
  const [friends, setFriends] = useState([]);

  const handleChange = (e) => {
    setSession(e.target.value);
  };

  const addFriend = (e) => {
    e.preventDefault();
    const email = document.getElementById("friend").value;
    if (email === "") {
      return;
    }
    setFriends([...friends, { email: email }]);
    document.getElementById("friend").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted", { session, friends });
    const dispatchGame = { session, friends, id: uuidv4() };
    //send game to reducer
    props.createGame(dispatchGame);
  };

  return (
    <div className="signIn">
      <Jumbotron />
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New Game</h5>
          <div className="input-field col s6">
            <label htlmfor="session">Session Title</label>
            <input type="text" id="session" onChange={handleChange} />
          </div>
          <div className="input-field col s6">
            <label htlmfor="friend">Add Friends</label>
            <input type="email" id="friend" />
          </div>
          <a
            className="btn-floating btn-large waves-effect waves-light red"
            onClick={addFriend}
          >
            <i className="material-icons">add</i>
          </a>
          <div className="input-field col s6">
            <button
              onClick={handleSubmit}
              className="btn pink lighten-1 z-depth-0"
            >
              Create Game
            </button>
          </div>
        </form>
        <h2>session: {session}</h2>
        <ul>
          {friends.map((item, e) => <li key={item.email}>{item.email}</li>)}
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: (game) => dispatch(createGame(game)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateGame);

//   const handleChange = (e) => {
//     setGame({ ...game, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("NewGame: ", game);
//   };
//   useEffect(() => {

//   });
//   const addFriend = (e) => {
//     const email = document.getElementById("friend").value;
//     console.log("game before: ", game);
//     setGame({ ...game, friends: { email: email } });
//     console.log("game: ", game);
//   }
