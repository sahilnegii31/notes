import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='pt-5 flex flex-col gap-5'>
      {/* <Navbar /> */}
      <div className='flex flex-col items-center gap-1'>
        <h1 className='text-4xl font-bold md:text-6xl'>My Notebook</h1>
        <p className='text-gray-800'>Smart Notes Manager</p>
        <button className='border-2 border-gray-400 px-[10px] mt-2 py-[5px] rounded-xl hover:scale-110'>Try Now</button>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl md:text-5xl font-bold md:text-6xl'>Features</h1>
        <div className='flex flex-col gap-1 items-center pt-3'>
            <h1 className='text-xl'>Easy to Add, Delete and Edit notes. </h1>
            <h1 className='text-xl'>Forever Storage.</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
