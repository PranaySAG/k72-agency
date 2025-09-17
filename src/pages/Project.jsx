import React from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'


const Project = () => {

  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg'
    },
  ]

   gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
   
    const heroes = gsap.utils.toArray('.hero');
    

   
    heroes.forEach(hero => {
      gsap.from(hero, {
        height: '100px',
        scrollTrigger: {   
          trigger: hero,    
          start: 'top 100%',    
          end: 'top -200%',      
          scrub: true,
          markers: true, 
        }
      })
    })
  })

  return (
    <div className='p-3'>
      <div className=' pt-[22vw]'>
        <h2 className='font-[lausanne500] text-[13vw] uppercase leading-55 text-black'>Projets</h2>
      </div>
      <div className='-mt-10 increase'>
        {projects.map(function (elem) {
          return <div className='hero w-full h-[500px] mb-2 flex gap-2.5'>
            <ProjectCard  image1={elem.image1} image2={elem.image2} />
            </div>
        })}
      </div>
      
     
    </div>
  )
}

export default Project
