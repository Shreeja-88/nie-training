import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const Login = () => {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventdefault();
    try{
      await LoginApi(username,password);
      navigate("/Search");
    }catch(error){
      console.error("Login failed", error);
    }
  };
  return (
    <>
      <br></br>
      <h2 className ="text-center text-success">Login Page</h2>
      <div className="d-flex justify-content-center align-items-center p-4">
        <form className="w-75">
          <div className="mb-3">
            <input name="username" type ="text" placeholder="Username" className ="form-control"></input>
          </div>
          <div>
            <input name="password" type ="text" placeholder="Password" className ="form-control"></input>
          </div>
          <br></br>
          <button type="submit" className="btn btn-success">Login</button>

        </form>
      </div>
    </>
  )
}
