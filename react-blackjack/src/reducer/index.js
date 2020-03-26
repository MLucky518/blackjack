import { FETCHING_DECK_SUCCESS } from "../actions/index";

const initialState = {
  success: false,
  deck_id: "",
  shuffled: false,
  remaining: 0
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DECK_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        success: action.payload.success,
        shuffled: action.payload.shuffled,
        deck_id: action.payload.deck_id,
        remaining: action.payload.remaining
      };
    default:
      return state;
  }
};
