import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Faqpage = () => {
  return (
    <section className='max-w-[88rem] m-auto py-24 | flex justify-between items-start '>
      <LeftContent />
      <RightContent />
    </section>
  )
}

export default Faqpage