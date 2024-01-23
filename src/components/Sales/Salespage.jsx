import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Salespage = () => {
  return (
    <section className='max-w-[88rem] relative | m-auto pt-24 pb-60 | flex flex-col justify-center items-center gap-40 px-8 | xl:flex-row xl:gap-0 xl:justify-between xl:items-start xl:px-0'>
      <LeftContent />
      <RightContent />
    </section>
  )
}

export default Salespage