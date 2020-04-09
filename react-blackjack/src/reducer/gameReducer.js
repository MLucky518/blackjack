// TODO modify actions to fit new game logic
import { DEAL, HIT } from "../actions/index";

export const gameState = {
  PLAYING: "Currently Playing",
  WIN: "YOU WON!!!",
  LOSE: "YOU LOST!"
};

const initialState = {
  dealerHand: [],
  dealerScore: 0,
  playerHand: [],
  playerScore: 0,
  gameStatus: gameState.PLAYING
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEAL:
      let [playerCard1, dealerCard1, playerCard2, dealerCard2] = action.payload;
      dealerCard1 = { ...dealerCard1, facedown: true };
      return {
        ...state,
        playerHand: [playerCard1, playerCard2],
        dealerHand: [dealerCard1, dealerCard2],
        gameStatus: gameState.PLAYING
      };

    case HIT:

    default:
      return state;
  }
};
