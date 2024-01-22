import './App.css'
import Aboutpage from './components/About/Aboutpage'
import Homepage from './components/HomePage/Homepage'
import Proof from './components/SocialProof/Proof'
import Testimonial from './components/Testimonials/Testimonial'

function App() {

  return (
    <div className='m-auto font-Inter'>
      <Homepage /> 
      <Proof />   
      <Aboutpage />
      <Testimonial />
    </div>
  )
}

export default App
