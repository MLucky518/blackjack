import React, { useEffect } from "react";
import { fetchDeck } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function TitleScreen({ fetchDeck, success, deck_id, shuffled, remaining }) {
  

  return (
    <div>
      <h1>Title</h1>
      <Link to="/gameboard">
        <button onClick={() => fetchDeck()}>Start</button>
      </Link>
    </div>
  );
}

export default connect(null, { fetchDeck })(TitleScreen);
