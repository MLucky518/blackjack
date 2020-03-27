import { combineReducers } from "redux";
import { deckReducer } from "./deckReducer";
import { cardReducer } from "./cardReducer";


export const rootReducer = combineReducers({
    deckReducer,
    cardReducer
});
