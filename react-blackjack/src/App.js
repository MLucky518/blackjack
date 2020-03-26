import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

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
    <div className="App">
      <h1>BlackJack TEST</h1>
    </div>
  );
}

export default App;
