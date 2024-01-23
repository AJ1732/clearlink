import React from 'react'
import Header from './Header'
import Hero from './Hero'
import bg_pattern from '../../assets/img/bg_pattern.png'

const Homepage = () => {
  return (
    <div className='relative | px-8 | xl:px-0 '>
      <img className='absolute m-auto -top-10 -left-4 -z-50' src={bg_pattern} />
      <Header />
      <Hero />
    </div>
  )
}

export default Homepage