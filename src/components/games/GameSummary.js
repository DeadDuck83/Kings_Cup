import React from "react";

const GameSummary = ({ game }) => {
  const replaceImage =
    "https://via.placeholder.com/200x120.png?text=This+is+a+placeholder+image";

  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img src={replaceImage} alt="Update ALT TAG" />
          <span className="card-title">Game Name</span>
        </div>
        <div className="card-content">
          <h3>{game.session}</h3>
          <p>Posted by Derek Moore</p>
          <p className="grey-text">April 12, 2pm</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
};

export default GameSummary;
