import axios from "axios";

export const FETCHING_DECK_SUCCESS = "FETCHING_DECK_SUCCESS";
export const DEAL = "DEAL";
export const PLAYER_HIT = "PLAYER_HIT";
export const DEALER_HIT = "DEALER_HIT";
export const CHECK_SCORE = "CHECK_SCORE";

export const getScore = () => {
  return { type: CHECK_SCORE };
};

export const fetchDeck = () => (dispatch) => {
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCHING_DECK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deal = (id) => (dispatch) => {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=4`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DEAL, payload: res.data.cards });
    })
    .catch((err) => {
      console.log("no card for you", err);
    });
};

export const playerHit = (id) => (dispatch) => {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    .then((res) => {
      console.log("RES", res);
      dispatch({ type: PLAYER_HIT, payload: res.data.cards[0] });
      dispatch(getScore());
    })
    .catch((err) => {
      console.log("no card for you", err);
    });
};

export const dealerHit = (id) => (dispatch, getState) => {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    .then((res) => {
      console.log("RES", res);
      dispatch({ type: DEALER_HIT, payload: res.data.cards[0] });
      dispatch(getScore());
      console.log("DEALER", getState().dealerScore);
    })
    .catch((err) => {
      console.log("no card for you", err);
    });
};

export const stand = (id) => (dispatch, getState) => {
  while (getState().dealerScore < 50) {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
      .then((res) => {
        console.log("RES", res);
        dispatch({ type: DEALER_HIT, payload: res.data.cards[0] });
        dispatch(getScore());
        // console.log("DEALER", getState().dealerScore);
      })
      .catch((err) => {
        console.log("no card for you", err);
      });
  }
  // dispatch({ type: "OUTCOME" });
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
