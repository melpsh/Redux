import {BUY_ICECREAM} from "./icecreamTypes";

export default function buyIcecream(icecream = 1){
    return{
        type: BUY_ICECREAM,
        payload: icecream
    }
}