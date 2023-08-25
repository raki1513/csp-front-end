import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../../App";
import axios from "axios";
const Profilecomponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null); 
  const [token, setToken] = useContext(Token);
  if (!token) {
    navigate("/Login");
  }
  useEffect(() => {
    axios.get("http://localhost:8000/Profile",{
        headers: {
          "x-token": token,
        },
      })  
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
    {
      data && 
      <div className="flex flex-col">
       <h1>{data.username}</h1>
       <button onClick={()=>setToken(null)}>Logout</button>
       </div>
    }
    </>
  );
};

export default Profilecomponent;
