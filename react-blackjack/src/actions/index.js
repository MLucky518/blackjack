import axios from "axios";

export const FETCHING_DECK_SUCCESS = "FETCHING_DECK_SUCCESS";
export const DEAL = "DEAL";
export const HIT = "HIT";

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

export const deal = id => dispatch => {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=4`)
    .then(res => {
      console.log(res);
      dispatch({ type: DEAL, payload: res.data.cards });
    })
    .catch(err => {
      console.log("no card for you", err);
    });
};

export const hit = person => dispatch => {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    .then(res => {
      console.log(res);
      dispatch({ type: HIT, payload: res.data.cards });
    })
    .catch(err => {
      console.log("no card for you", err);
    });
};

// export const drawCard = id => dispatch => {
//   axios
//     .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`)
//     .then(res => {
//       console.log(res);
//       dispatch({ type: DRAW_CARD, payload: res.data.cards });
//     })
//     .catch(err => {
//       console.log("no card for you", err);
//     });
// };

// export const drawDealer = id => dispatch => {
//   axios
//     .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`)
//     .then(res => {
//       console.log(res);
//       dispatch({ type: DRAW_DEALER, payload: res.data.cards });
//     })
//     .catch(err => {
//       console.log("no card for you", err);
//     });
// };
