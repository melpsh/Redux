import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeSlice";
import userReducer from "./users/userSlice";


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        user: userReducer
    }
})

export default store;