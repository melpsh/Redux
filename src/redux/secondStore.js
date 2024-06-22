import { createStore } from "redux";
import icecreamReducer from "./icecream/icecreamReducer";


const store = createStore(icecreamReducer);


export default store;