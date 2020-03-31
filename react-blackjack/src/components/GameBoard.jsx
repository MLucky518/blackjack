import React, {useState, useEffect } from "react";
import { fetchDeck, drawCard, drawDealer } from "../actions/index";
import { connect } from "react-redux";
import Card from "./Card";

function GameBoard({ fetchDeck, drawCard,drawDealer, success, deck_id, shuffled, remaining,cards,dealerCards }) {
 
const [playerScore,setPlayerScore] = useState();
const [dealerScore,setDealerScore] = useState();


 const dealHand = () =>{
   
  drawCard(deck_id);
  drawDealer(deck_id);
  
}


  useEffect(() =>{
   
    console.log(cards);
    
   
  },[]);


 

  return (
    <div>
      <h1>Game Board</h1>
      <p>{success}</p>
      <p>{deck_id}</p>
      <p>{shuffled}</p>
      <p>{remaining}</p>
      <button onClick ={()=> dealHand(deck_id)}>Draw Cards</button>

      <div className = "hand">
        {cards.map(card =>{
         return <Card src ={card.image}/>
        })}
        {dealerCards.map(card =>{
         return <Card src ={card.image}/>
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

export default connect(mapStateToProps, { fetchDeck,drawCard,drawDealer })(GameBoard);
