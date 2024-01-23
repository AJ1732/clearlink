import './App.css'
import Aboutpage from './components/About/Aboutpage'
import Homepage from './components/HomePage/Homepage'
import Proof from './components/SocialProof/Proof'
import Testimonial from './components/Testimonials/Testimonial'
import Faqpage from './components/FAQs/faqpage'

function App() {

  return (
    <div className='m-auto font-Inter'>
      <Homepage /> 
      <Proof />   
      <Aboutpage />
      <Testimonial />
      <Faqpage />
    </div>
  )
}

export default App
