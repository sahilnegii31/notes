import { useState } from 'react'
import axios from 'axios';

const Login = ({ onLoginSuccess }) => {
  const [auth, setauth] = useState("login")
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (username, password) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", 
        { 
          username: username, 
          password: password
        },
        { withCredentials: true }
      );
      if (response.data?.message) {
        alert(response.data.message);
      }
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed";
      seterror(msg);
      alert(msg);
      console.log("Error in calling register api", msg);
    } finally {
      setLoading(false);
    }
  }

  const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", 
        { username, password },
        { withCredentials: true }
      );
      if (response.data?.message) {
        console.log(response.data.message);
      }
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      seterror(msg);
      alert(msg);
      console.log("Error in calling api login ", msg);
    } finally {
      setLoading(false);
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    auth === "signup" ? registerUser(username, password) : login(username, password);
    setusername("");
    setpassword("");
  }

  return (
    <div className='max-w-md mx-auto my-12 px-4'>
      <div className='relative rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-amber-500/30 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.12)] flex flex-col items-center gap-6 overflow-hidden'>
        {/* Top Gold Shimmer Bar */}
        <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600' />

        {/* Vault Icon */}
        <div className='w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl shadow-[0_0_15px_rgba(245,158,11,0.2)]'>
          {auth === "login" ? "🔒" : "✨"}
        </div>

        {/* Header */}
        <div className='text-center flex flex-col gap-1'>
          <h1 className='font-luxury text-3xl font-bold gold-gradient-text'>
            {auth === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className='text-zinc-400 text-xs sm:text-sm'>
            {auth === "login" 
              ? "Access your encrypted notes and journal" 
              : "Start organizing your thoughts in gold and obsidian"}
          </p>
        </div>

        {error && (
          <div className='w-full p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs text-center'>
            {error}
          </div>
        )}

        {/* Auth Form */}
        <form className='flex flex-col gap-4 w-full' onSubmit={handlesubmit}>
          <div className='flex flex-col gap-1.5'>
            <label className='text-xs font-semibold uppercase tracking-wider text-amber-400/90'>
              Username
            </label>
            <input 
              type="text" 
              required 
              placeholder='Enter your username' 
              className='w-full bg-zinc-900/90 border border-zinc-700/80 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-zinc-100 rounded-xl px-4 py-2.5 text-sm placeholder:text-zinc-600 focus:outline-none transition-all'
              onChange={(e) => setusername(e.target.value)} 
              value={username}
            />
          </div>

          <div className='flex flex-col gap-1.5'>
            <label className='text-xs font-semibold uppercase tracking-wider text-amber-400/90'>
              Password
            </label>
            <input 
              type="password" 
              required 
              placeholder='Enter password' 
              className='w-full bg-zinc-900/90 border border-zinc-700/80 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-zinc-100 rounded-xl px-4 py-2.5 text-sm placeholder:text-zinc-600 focus:outline-none transition-all'
              onChange={(e) => setpassword(e.target.value)} 
              value={password}
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className='w-full mt-2 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-50'
          >
            {loading ? "Processing..." : auth === "login" ? "Enter Vault" : "Register Vault"}
          </button>
        </form>

        {/* Toggle */}
        <button 
          type="button"
          className="text-zinc-400 hover:text-amber-300 text-xs sm:text-sm cursor-pointer transition-colors pt-2 border-t border-zinc-800/80 w-full text-center" 
          onClick={() => {
            seterror("");
            auth === "login" ? setauth("signup") : setauth("login");
          }}
        >
          {auth === "login" 
            ? "Need an account? Sign up for free" 
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  )
}

export default Login
