import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between m-[10px] border-b-1'>
      <div className='w-50'>Notes</div>
      <div className='w-50'>
        <ul className = 'flex justify-evenly w-full'>
            <li>Home</li>
            <li>Notes</li>
            <li>Login</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
