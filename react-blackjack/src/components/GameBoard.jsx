import React from "react";
import { fetchDeck } from "../actions/index";
import { connect } from "react-redux";

function GameBoard({ fetchDeck, success, deck_id, shuffled, remaining }) {
  return (
    <div>
      <h1>Game Board</h1>
      <p>{success}</p>
      <p>{deck_id}</p>
      <p>{shuffled}</p>
      <p>{remaining}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    success: state.success,
    deck_id: state.deck_id,
    shuffled: state.shuffled,
    remaining: state.remaining
  };
};

export default connect(mapStateToProps, { fetchDeck })(GameBoard);
