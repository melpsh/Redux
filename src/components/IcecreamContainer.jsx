import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyIcecream from "../redux/icecream/icecreamActions";

const IcecreamContainer = () => {
    const [counter, setCounter] = useState(0);
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.icecream);
    console.log("iceeeeeeeeeeeeecream",state);
  return (
    <>
    <h1>Buy IceCream here</h1>
        <h2>Number of iceCream : {state.numberOfIcecream}</h2>
        <input type="number" onChange={(e)=>setCounter(e.target.value)} value={counter} />
            <button onClick={()=> dispatch(buyIcecream(counter))}>Buy IceCream</button>
    </>
  )
};

export default IcecreamContainer;
