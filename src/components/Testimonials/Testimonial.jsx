import React from 'react'
import Content from './Content'
import Testgrid from './Testgrid'

const Testimonial = () => {
  return (
    <section className='bg-gray100 | py-24'>
      <div className='max-w-[88rem] | m-auto px-8 | flex flex-col justify-between items-center | xl:flex-row'>
        <Content />
        <Testgrid />
      </div>
    </section>
  )
}

export default Testimonial