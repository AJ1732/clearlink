import React from 'react'
import test_img_1 from '../../assets/img/test_img_1.png'
import test_img_2 from '../../assets/img/test_img_2.png'
import test_img_3 from '../../assets/img/test_img_3.png'
import test_img_4 from '../../assets/img/test_img_4.png'
import test_img_5 from '../../assets/img/test_img_5.png'

const Testgrid = () => {
  return (
    <div className='grid gap-4'>
      <div className='flex gap-4 justify-center items-end'>
        <img className='w-40 h-40' src={test_img_1} />
        <img className='w-40 h-60' src={test_img_2} />
      </div>
      <div className='flex gap-4 justify-center items-start'>
        <img className='w-48 h-32' src={test_img_3} />
        <img className='w-40 h-60' src={test_img_4} />
        <img className='w-48 h-32' src={test_img_5} />
      </div>
    </div>
  )
}

export default Testgrid