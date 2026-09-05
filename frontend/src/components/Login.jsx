import React, { useState } from 'react'
import axios from 'axios';
const Login = () => {
  const [auth, setauth] = useState("login")
  const [islogin, setislogin] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const error = "";

  const registerUser = async (username,password) => {
    try{
      const { message } = await axios.post("http://localhost:3000/api/auth/register" , 
      {username , password},
      {withCredentials : true}
    );
    //alert(message)
    }
    catch(err){
      if(err){
        alert(err.response.data.message, "!!");
      }
      console.log("Error in calling register api" , err.response.data.message);
    }
  }

  const login = async (username , password) => {
    try{
      const { message } = await axios.post("http://localhost:3000/api/auth/login" , 
        {username , password},
        {
          withCredentials : true
        }
      );
      alert(message ,"try" );
      setislogin(true);
    } catch(err){
      if(err){
        alert(err, "!!");
      }
      console.log("Error in calling api login ", err.response.data.message);
    }

  }
  const handlesubmit = (e) => {
    e.preventDefault();
    auth=="signup" ? registerUser(username , password) : login(username , password);
    console.log("form submitted");
    console.log(username , password);
    setusername("");
    setpassword("");
  }



  // console.log(error);
  return (
    <div className='mx-[2rem] h-fit p-[20px] flex flex-col items-center gap-2 rounded-xl border-1'>
      {auth === "login" ? <h1>Login</h1> : <h1>Sign up</h1> }
      <form action="" className='flex flex-col gap-3 items-center' onSubmit={(e)=>handlesubmit(e)}>
        <label>
            {/* <p>Username : </p> */}
            <input type = "textarea" required placeholder='Enter your username' className='border-1 px-2 rounded' onChange={(e) =>setusername(e.target.value)} value = {username} ></input>
        </label>
        <label>
            {/* <p>Username : </p> */}
            <input type = "password" required placeholder='Enter password' className='border-1 px-2 rounded' onChange={(e) =>setpassword(e.target.value)} value={password}></input>
        </label>
        <button className='border-1 w-fit px-[20px] py-[5px] rounded-md hover:scale-110 transition-all duration-150 cursor-pointer' >Submit</button>
      </form>
      <button className="text-gray-500 cursor-pointer" onClick={()=>{
        auth === "login" ? setauth("signup") : setauth("login");
      }}>{auth === "login" ? "New account ? Sign up" : "Already have an account? Login." }</button>;
    </div>
  )
}

export default Login
