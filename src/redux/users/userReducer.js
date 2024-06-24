import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const INITIAL_STATE = {
    data : [],
    loading : false,
    error : ""
}

export default function userReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_USER_REQUEST : {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_USER_SUCCESS : {
            return {
                ...state,
                data : action.payload,
                loading: false,
                error: ""
            }
        }
        case FETCH_USER_FAILURE : {
            return {
                ...state,
                data : [],
                loading: false,
                error : action.payload
            }
        }
        default : return state
    }
}