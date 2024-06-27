import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    numberOfCake : 20,
}

// export default function cakeReducer(state = initialState, action){
//     switch(action.type){
//         case BUY_CAKE:{
//             return {
//                 ...state,
//                 numberOfCake: state.numberOfCake - action.payload
//             }
//         } 
//         default: return state;
//     }
// }

export const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        buyCake : (state, action)=> {
            state.numberOfCake = state.numberOfCake - action.payload
        } 
    }
});

console.log("KHODE REDUCER: ",cakeSlice.reducer);
console.log("ACTIONS: ",cakeSlice.actions);

export const {buyCake} = cakeSlice.actions
export default cakeSlice.reducer