import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className='font-[lausanne500] gap-2 flex justify-center items-center m-1 font-bold'>
      <div className='border-2 rounded-full px-14 hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        <Link className='text-[5vw] uppercase' to='/project'>Projects</Link>
      </div>
      <div className='border-2 rounded-full px-10 hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        <Link className='text-[5vw] uppercase' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
