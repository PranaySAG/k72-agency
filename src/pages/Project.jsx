import React, { useEffect } from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from 'lenis'
import Footer from '../components/footer/Footer'

const Project = () => {
  const projects = [
    {
      image1: 'images/project/project_img_1.jpg',
      image2: 'images/project/project_img_2.jpg',
    },
    {
      image1: 'images/project/project_img_3.jpg',
      image2: 'images/project/project_img_4.jpg',
    },
    {
      image1: 'images/project/project_img_5.jpg',
      image2: 'images/project/project_img_6.jpg',
    },
    {
      image1: 'images/project/project_img_7.jpg',
      image2: 'images/project/project_img_8.jpg',
    },
    {
      image1: 'images/project/project_img_9.jpg',
      image2: 'images/project/project_img_10.jpg',
    },
    {
      image1: 'images/project/project_img_11.jpg',
      image2: 'images/project/project_img_12.jpg',
    },
    {
      image1: 'images/project/project_img_13.jpg',
      image2: 'images/project/project_img_14.jpg',
    },
    {
      image1: 'images/project/project_img_15.jpg',
      image2: 'images/project/project_img_16.jpg',
    },
  ]

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    return () => lenis.destroy()
  }, [])

     gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '30px',
      stagger: {
        amount: 0.2
      },
      scrollTrigger: {
        trigger: '.increase',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })
   return (
    <div>
    <div className='lg:p-4 p-2'>
      <div className=' pt-[50vh]'>
        <h2 className='font-[lausanne500] lg:leading-[10vw] lg:text-[13vw] text-7xl uppercase text-black'>Projets</h2>
      </div>
      <div className='-lg:mt-20 increase'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[600px] h-[200px] lg:mb-4 mb-1 flex lg:flex-row  lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Project
