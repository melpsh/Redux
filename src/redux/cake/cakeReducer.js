import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numberOfCake : 20,
}

export default function cakeReducer(state = initialState, action){
    switch(action.type){
        case BUY_CAKE:{
            return {
                ...state,
                numberOfCake: state.numberOfCake - action.payload
            }
        } 

        default: return state;
    }
}