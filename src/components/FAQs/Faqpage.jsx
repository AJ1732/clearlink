import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Faqpage = () => {
  return (
    <section className='max-w-[88rem] m-auto py-24 | flex flex-col justify-between items-center gap-32 xl:flex-row xl:items-start xl:gap-0'>
      <LeftContent />
      <RightContent />
    </section>
  )
}

export default Faqpage