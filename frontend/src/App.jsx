import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Notes from './components/Notes'
import Home from './components/Home'
import Footer from './components/Footer'
import axios from 'axios';


const App = () => {
  const [notes, setnotes] = useState([]);

  const uploadNotes = async (message)=>{
    const response = await axios.post("http:localhost:3000/api/notes/newnotes" , message );
    console.log(response.message);
    return alert("Note added successfully");
  }

  

  const delnotes = async (id) => {
    const response = await axios.delete(`http:localhost:3000/api/notes/delnotes/${id}`);
    return alert(response);
  }

  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <Footer />
    </div>
  )
}

export default App
