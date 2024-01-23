import './App.css'
import Aboutpage from './components/About/Aboutpage'
import Homepage from './components/HomePage/Homepage'
import Proof from './components/SocialProof/Proof'
import Testimonial from './components/Testimonials/Testimonial'
import Faqpage from './components/FAQs/faqpage'
import Salespage from './components/Sales/Salespage'

function App() {

  return (
    <div className='m-auto font-Inter | overflow-hidden'>
      <Homepage /> 
      <Proof />   
      <Aboutpage />
      <Testimonial />
      <Faqpage />
      <Salespage />
    </div>
  )
}

export default App
