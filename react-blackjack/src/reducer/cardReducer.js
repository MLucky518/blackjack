import { DRAW_CARD, DRAW_DEALER } from "../actions";

const initialState = {
  cards: [],
  dealerCards: []
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAW_CARD:
      return {
        ...state,
        cards: action.payload
      };

    case DRAW_DEALER:
      return {
        ...state,
        dealerCards: action.payload
      };
    default:
      return state;
  }
};
