import React, { useEffect } from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from '@studio-freight/lenis'
import Footer from '../components/footer/Footer'

const Project = () => {
  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg',
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
