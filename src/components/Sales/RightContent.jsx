import React from 'react'
import screen_mockup from '../../assets/img/screen_mockup.png'

const RightContent = () => {
  return (
    <div className=''>
      <img 
        className='max-w-5xl w-5/6 | absolute left-[10vw] |  xl:left-[40rem]' 
        src={screen_mockup} />
      <div className='h-[25dvh] md:h-[45dvh] lg:h-[65dvh] xl:hidden'></div>
    </div>
  )
}

export default RightContent