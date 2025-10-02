
import AgenceCardAnim from '../components/agenece/AgenceCardAnim'
import Cards from '../components/agenece/MarqueeCard'
import Footer from '../components/footer/Footer'

const Agence = () => {
  return (
    <div className='h-full w-full'>
      <AgenceCardAnim/>
      <div>
      <Cards />
      <Footer/>
      </div>
      
    </div>
  )
}

export default Agence
