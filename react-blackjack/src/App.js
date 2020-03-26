import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import TitleScreen from "./components/TitleScreen";
import GameBoard from "./components/GameBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <TitleScreen />
          </Route>
          <Route path="/gameboard">
            <GameBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
