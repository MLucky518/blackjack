import React, { useState, useEffect } from "react";
import { fetchDeck, deal } from "../actions/index";
import { connect } from "react-redux";
import Card from "./Card";

function GameBoard({ fetchDeck, deck_id, remaining, playerHand, dealerHand,deal }) {
  const [playerScore, setPlayerScore] = useState();
  const [dealerScore, setDealerScore] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Game Board</h1>

      <button onClick={() => deal(deck_id)}>Draw Cards</button>

      <div className="hand">
        {console.log(playerHand)}
        {playerHand.map(card => {
          return <Card src={card.image} />;
        })}

        {dealerHand.map(card => {
          return <Card src={card.image} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dealerHand: state.dealerHand,
    playerHand: state.playerHand,
  };
};

export default connect(mapStateToProps, { fetchDeck, deal })(GameBoard);
