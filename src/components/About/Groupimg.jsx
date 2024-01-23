import React from 'react'
import image from '../../assets/img/group_img.png'
import arrow from '../../assets/icon/hand_drawn_arrow.svg'

const Groupimg = () => {
  return (
    <div className='relative'>
      <img className='absolute z-50 -top-56 left-[3.7rem]' src={arrow} alt="" />
      <img className='max-w-[34rem]' src={image} />
    </div>
  )
}

export default Groupimg