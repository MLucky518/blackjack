import { DRAW_CARD } from "../actions";


const initialState = {

    cards:[]
    
};


export const cardReducer = (state = initialState,action) =>{

    switch(action.type){

        case DRAW_CARD:
            return{
                ...state,
                cards:action.payload
            }
        default:
            return state;
    }
}

