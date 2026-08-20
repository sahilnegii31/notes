import React from 'react'

const Card = () => {
  return (
    <div className='text-white p-[10px] bg-transparent border-1 border-gray-400 w-[20rem] flex flex-col gap-3'>
      <div className='flex justify-between'>
        <h1 className='border-b-1 border-gray-400'>Title..</h1>
        <button className='w-[25px] border-1 text-red-600'>X</button>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam!</p>
    </div>
  )
}

export default Card
