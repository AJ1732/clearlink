import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Salespage = () => {
  return (
    <section className='max-w-[88rem] relative | m-auto pt-24 pb-60 | flex justify-between items-start'>
      <LeftContent />
      <RightContent />
    </section>
  )
}

export default Salespage