import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="font-[lausanne300] mt-72 lg:mt-0 pt-5 text-center">
      <div className="lg:text-[9.5vw] text-[12vw] flex justify-center items-center uppercase leading-[7vw] mb-[2vw]">
        L&apos;étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] flex justify-center items-center uppercase leading-[7vw] mb-[2vw]">
        qui
        <span className="inline-block h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden align-middle mx-[0.5vw]">
          <Video />
        </span>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] flex justify-center items-center uppercase leading-[8vw]">
        la créativité
      </div>
    </div>
  )
}

export default HomeHeroText
