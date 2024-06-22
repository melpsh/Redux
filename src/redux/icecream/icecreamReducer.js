import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
    numberOfIcecream: 50,
}

export default function icecreamReducer(state = initialState, action){
    switch(action.type){
        case BUY_ICECREAM:{
            return{
                ...state,
                numberOfIcecream: state.numberOfIcecream - action.payload
            }
        }
        default: return state;
    }
}