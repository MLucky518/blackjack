import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TitleScreen from "./components/TitleScreen";
import GameBoard from "./components/GameBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [deck_id, setDeck_id] = useState("");
  useEffect(() => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
      .then(res => {
        console.log(res);
        setDeck_id(res.data.deck_id);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(deck_id);

  return (
    <Router>
      <div className="App">
      <TitleScreen />
         <Switch>
          <Route exact path="/">
            
          </Route>
          <Route path="/gameboard">
            <GameBoard deck_id = {deck_id}/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
