import React, { useState, useEffect } from "react";
import { fetchDeck, drawCard, drawDealer } from "../actions/index";
import { connect } from "react-redux";
import Card from "./Card";

function GameBoard({
  fetchDeck,
  drawCard,
  drawDealer,
  success,
  deck_id,
  shuffled,
  remaining,
  cards,
  dealerCards
}) {
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const dealHand = () => {
    drawCard(deck_id);
    drawDealer(deck_id);
    // parseCardValue(cards);
    // parseCardValue(dealerCards);

    // console.log("Parse 1", parseCardValue(cards));
    // console.log("Parse 2", parseCardValue(dealerCards));
  };

  const reducerFunction = (accumulator, currentValue) =>
    accumulator + currentValue;

  const parseCardValue = item => {
    switch (item.value) {
      case "QUEEN":
        item.value = "10";
        break;
      case "KING":
        item.value = "10";
      case "JACK":
        item.value = "10";
      default:
        return item.value;
    }
    console.log("values", item);
    return parseInt(item);
  };

  useEffect(() => {
    console.log(cards);
    // console.log("Parse 1", parseCardValue(cards && cards));
    // console.log("Parse 2", parseCardValue(dealerCards && dealerCards));
  }, []);

  return (
    <div>
      <h1>Game Board</h1>
      <p>{success}</p>
      <p>{deck_id}</p>
      <p>{shuffled}</p>
      <p>{remaining}</p>
      <button onClick={() => dealHand(deck_id)}>Draw Cards</button>

      <div className="hand">
        {cards.map(card => {
          console.log("Parse 1: ", parseCardValue(card));
          return <Card src={card.image} />;
        })}
        {dealerCards.map(card => {
          console.log("Parse 2: ", parseCardValue(card));
          return <Card src={card.image} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    success: state.deckReducer.success,
    deck_id: state.deckReducer.deck_id,
    shuffled: state.deckReducer.shuffled,
    remaining: state.deckReducer.remaining,
    cards: state.cardReducer.cards,
    dealerCards: state.cardReducer.dealerCards
  };
};

export default connect(mapStateToProps, { fetchDeck, drawCard, drawDealer })(
  GameBoard
);
