import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

export default function userFetch(){
    return (dispatch) => {
        dispatch({type: FETCH_USER_REQUEST})
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{dispatch({type: FETCH_USER_SUCCESS, payload: res.data})})
        .catch((error)=>{dispatch({type: FETCH_USER_FAILURE, payload: error.message})})
    }
}

// export default function userPost(){
//     return(dispatch) => {

//     }
// }