import './App.css'
import Aboutpage from './components/About/Aboutpage'
import Homepage from './components/HomePage/Homepage'
import Proof from './components/SocialProof/Proof'
import Testimonial from './components/Testimonials/Testimonial'
import Faqpage from './components/FAQs/Faqpage'
import Salespage from './components/Sales/Salespage'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='m-auto px-10 font-Inter | overflow-hidden'>
      <Homepage /> 
      <main>
        <Proof />   
        <Aboutpage />
        <Testimonial />
        <Faqpage />
        <Salespage />
      </main>
      <Footer />
    </div>
  )
}

export default App
