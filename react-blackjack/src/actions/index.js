import axios from "axios";

export const FETCHING_DECK_SUCCESS = "FETCHING_DECK_SUCCESS";

export const fetchDeck = () => dispatch => {
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_DECK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
