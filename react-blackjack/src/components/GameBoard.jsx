import React from "react";
import { fetchDeck, drawCard } from "../actions/index";
import { connect } from "react-redux";
import axios from "axios";

function GameBoard({ fetchDeck, drawCard, success, deck_id, shuffled, remaining,cards }) {
console.log(cards);
  return (
    <div>
      <h1>Game Board</h1>
      <p>{success}</p>
      <p>{deck_id}</p>
      <p>{shuffled}</p>
      <p>{remaining}</p>
      <button onClick ={()=> drawCard(deck_id)}>Draw Cards</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    success: state.deckReducer.success,
    deck_id: state.deckReducer.deck_id,
    shuffled: state.deckReducer.shuffled,
    remaining: state.deckReducer.remaining,
    cards: state.cardReducer.cards
  };
};

export default connect(mapStateToProps, { fetchDeck,drawCard })(GameBoard);
