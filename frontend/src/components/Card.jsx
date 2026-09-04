import React from 'react'

const Card = (note) => {
  return (
    <div className='text-white p-[10px] bg-transparent border-1 border-gray-400 w-[20rem] flex flex-col gap-3'>
      <div className='flex justify-between'>
        <h1 className='border-b-1 border-gray-400'>{note.title}</h1>
        <button className='w-[25px] border-1 text-red-600 ' onClick={()=>{delnotes(note._id)}}>X</button>
      </div>
      <p>{note.desc}</p>
    </div>
  )
}

export default Card
