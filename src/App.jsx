import './App.css'
import Aboutpage from './components/About/Aboutpage'
import Homepage from './components/HomePage/Homepage'
import Proof from './components/SocialProof/Proof'

function App() {

  return (
    <div className='m-auto font-Inter'>
      <Homepage /> 
      <Proof />   
      <Aboutpage />
    </div>
  )
}

export default App
