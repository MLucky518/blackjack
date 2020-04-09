import React, { useState, useEffect } from "react";
import { fetchDeck, deal, playerHit, dealerHit, stand } from "../actions/index";
import { connect } from "react-redux";
import Card from "./Card";

function GameBoard({
  fetchDeck,
  deck_id,
  remaining,
  playerHand,
  dealerHand,
  deal,
  playerHit,
  dealerHit,
  stand,
}) {
  const [playerScore, setPlayerScore] = useState();
  const [dealerScore, setDealerScore] = useState();

  useEffect(() => {}, []);

  const handlePlayerHit = (e) => {
    if (playerScore > 21) {
      console.log("no more draw");
    } else {
      playerHit(deck_id);
    }
  };

  return (
    <div>
      <h1>Game Board</h1>

      <button onClick={() => deal(deck_id)}>Draw Cards</button>
      <button onClick={() => stand(deck_id)}>Stand</button>

      <div className="hand">
        {console.log(playerHand)}
        {playerHand.map((card) => {
          return <Card src={card.image} />;
        })}

        <button onClick={handlePlayerHit} type="submit">
          Player Hit
        </button>

        {dealerHand.map((card) => {
          return <Card src={card.image} />;
        })}
        <button onClick={() => dealerHit(deck_id)} type="submit">
          Dealer Hit
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dealerHand: state.dealerHand,
    playerHand: state.playerHand,
  };
};

export default connect(mapStateToProps, {
  fetchDeck,
  deal,
  playerHit,
  dealerHit,
  stand,
})(GameBoard);
