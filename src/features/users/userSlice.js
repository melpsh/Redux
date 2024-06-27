// export default function userFetch(){
//     return (dispatch) => {
//         dispatch({type: FETCH_USER_REQUEST})
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((res)=>{dispatch({type: FETCH_USER_SUCCESS, payload: res.data})})
//         .catch((error)=>{dispatch({type: FETCH_USER_FAILURE, payload: error.message})})
//     }
// }

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getAsyncUser = createAsyncThunk("user/getAsyncUsers",
    async (_,{rejectWithValue})=> {
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            return res.data;
        }catch(error){
            return rejectWithValue(error.message); 
        }
    }
)

const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAsyncUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = ""
        }),
        builder.addCase(getAsyncUser.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.payload
        }),
        builder.addCase(getAsyncUser.pending, (state, action) => {
          state.loading = true;
          state.data = [];
          state.error = ""
        })
      },
});

export default userSlice.reducer