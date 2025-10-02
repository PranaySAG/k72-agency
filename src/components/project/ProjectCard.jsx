import React from 'react'

const ProjectCard = (props) => {
  return (
     <>
        <div className='w-1/2 group h-full transition-all relative rounded-none overflow-hidden lg:hover:rounded-[50px] hover:rounded-[20px]'>
        <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            <h2 className='uppercase transition-all group opacity-0 group-hover:opacity-100 lg:text-6xl text-2xl font-[lausanne300] lg:border-4 border-2 pt-2 px-6 text-white border-white rounded-full'>Voir le projet</h2>
            </div>
        </div>
        <div className='w-1/2 group h-full transition-all relative rounded-none overflow-hidden lg:hover:rounded-[50px] hover:rounded-[20px]'>
        <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            <h2 className='uppercase transition-all group opacity-0 group-hover:opacity-100 lg:text-6xl text-2xl font-[lausanne300] lg:border-4 border-2 pt-2 px-6 text-white border-white rounded-full'>Voir le projet</h2>
            </div>
        </div>
     </>
  )
}

export default ProjectCard
