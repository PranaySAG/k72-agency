import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
   <div className='font-[lausanne500] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[20vw] w-84 lg:right-10 right-0 bottom-34 [text-indent:5rem]  lg:bottom-33 font-[lausanne300] text-sm lg:leading-relaxed leading-tight'>
       K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  flex items-center px-3  lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[5vw]' to='/project'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]   flex items-center px-3  lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[5vw]' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
