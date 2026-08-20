import React, { useState } from 'react'

const Login = () => {
    const [auth, setauth] = useState("signup")
  return (
    <div className='mx-[2rem] h-fit p-[20px] flex flex-col items-center gap-2 rounded-xl border-1'>
      {auth === "login" ? <h1>Login</h1> : <h1>Sign up</h1> }
      <form action="" className='flex flex-col gap-3 items-center'>
        <label>
            {/* <p>Username : </p> */}
            <input type = "textarea" required placeholder='Enter your username' className='border-1 px-2 rounded'></input>
        </label>
        <label>
            {/* <p>Username : </p> */}
            <input type = "textarea" required placeholder='Enter password' className='border-1 px-2 rounded'></input>
        </label>
        <button className='border-1 w-fit px-[20px] py-[5px] rounded-md hover:scale-110 transition-all duration-150 cursor-pointer'>Submit</button>
      </form>
      <button className="text-gray-500 cursor-pointer" onClick={()=>{
        auth === "login" ? setauth("signup") : setauth("login");
      }}>{auth === "login" ? "New account ? Sign up" : "Already have an account? Login." }</button>;
    </div>
  )
}

export default Login
