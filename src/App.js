import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import GameDetails from "./components/games/GameDetails";
import SignedIn from "./components/auth/SignedIn";
import SignedUp from "./components/auth/SignedUp";
import CreateGame from "./components/games/CreateGame";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/game/:id" component={GameDetails} />
          <Route path="/signin" component={SignedIn} />
          <Route path="/signup" component={SignedUp} />
          <Route path="/create" component={CreateGame} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
