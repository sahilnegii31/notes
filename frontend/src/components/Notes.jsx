import React, { useState } from 'react'
import Card from './Card'

const Notes = () => {
  const [notes, setnotes] = useState([]);
  const getnotes = async () => {
      const response = await axios.get("http:localhost:3000/api/notes/getnotes");
      console.log(response);
      setnotes(...notes , response);
    }
  return (
    <div className='bg-black w-full h-full flex flex-wrap gap-3 justify-center p-[30px]'>
      {notes.map((note , idx) => {
        return <Card note = {note}/>
        })}
    </div>
  )
}

export default Notes
