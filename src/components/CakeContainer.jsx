import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeActions";

const CakeContainer = () => {
    const [counter, setCounter] = useState(0);
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.cake);
    console.log('cakeeeeee',state);
  return (
    <>
    <h1>Buy cake here</h1>
        <h2>Number of cake : {state.numberOfCake}</h2>
        <input type="number" onChange={(e)=>setCounter(e.target.value)} value={counter} />
            <button onClick={()=> dispatch(buyCake(counter))}>Buy cake</button>
    </>
  )
};

export default CakeContainer;