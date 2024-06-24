import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userFetch from "../redux/users/userActions";

const UserList = () => {

  const dispatch = useDispatch();
  const state = useSelector((state)=>state.user);

  useEffect(()=>{
    dispatch(userFetch());
  },[dispatch])

  return (
    <>
    <h1>List of Users:</h1>
    {
      state.loading? (<p>Loading</p>) : 
      state.error? (<p>{state.error}</p>):
      <div>{state.data && state.data.map(item=> (
        <li key={item.id}>{item.name}</li>
      ))}</div>
    }
    </>
  )
};

export default UserList;
