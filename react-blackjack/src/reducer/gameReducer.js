// TODO modify actions to fit new game logic
import { DEAL, PLAYER_HIT, DEALER_HIT, CHECK_SCORE } from "../actions/index";

export const gameState = {
  PLAYING: "Currently Playing",
  WIN: "YOU WON!!!",
  LOSE: "YOU LOST!",
};

const initialState = {
  dealerHand: [],
  dealerScore: 0,
  playerHand: [],
  playerScore: 0,
  gameStatus: gameState.PLAYING,
};

//Hell yeah VVVV
export const parseScores = (cards) => {
  const updatedScore = cards.map((item) => {
    if (item.value === "QUEEN") {
      return 10;
    } else if (item.value === "KING") {
      return 10;
    } else if (item.value === "JACK") {
      return 10;
    } else if (item.value === "ACE") {
      return 11;
    } else {
      return parseInt(item.value);
    }
  });
  console.log(
    "SCORE 1: ",
    updatedScore.reduce((a, b) => a + b, 0)
  );
  return updatedScore.reduce((a, b) => a + b, 0);
};
//Hell yeah ^^^

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEAL:
      let [playerCard1, dealerCard1, playerCard2, dealerCard2] = action.payload;
      dealerCard1 = { ...dealerCard1, facedown: true };
      return {
        ...state,
        playerHand: [playerCard1, playerCard2],
        dealerHand: [dealerCard1, dealerCard2],
        gameStatus: gameState.PLAYING,
      };
    case PLAYER_HIT:
      return {
        ...state,
        playerHand: [...state.playerHand, action.payload],
      };
    case DEALER_HIT:
      return {
        ...state,
        dealerHand: [...state.dealerHand, action.payload],
      };
    case "OUTCOME":
      const calculateStatus = () => {
        if (state.playerScore === 21) return gameState.WIN;
        if (state.playerScore > 21) return gameState.LOSE;
        if (state.dealerScore > 21) return gameState.WIN;
        if (state.playerScore >= state.dealerScore) return gameState.WIN;
        if (state.playerScore < state.dealerScore) return gameState.LOSE;
        return gameState.PLAYING;
      };
    case CHECK_SCORE:
      return {
        ...state,
        playerScore: parseScores(state.playerHand),
        dealerScore: parseScores(state.dealerHand),
      };

    default:
      return state;
  }
};
