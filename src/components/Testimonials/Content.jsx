import React from 'react'
import avatar_test from '../../assets/img/avatar_test.png'
import shopify from '../../assets/icon/shopify.svg'
import star from '../../assets/icon/star.svg'
import arrow_left from '../../assets/icon/arrow_left.svg'
import arrow_right from '../../assets/icon/arrow_right.svg'

const Content = () => {
  return (
    <div className='max-w-[40rem] | flex flex-col items-start justify-center gap-12'>
      <img src={shopify} />

      <div className='flex gap-1'>
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>

      <p className='text-gray900 text-[2.75rem] font-medium'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</p>

      <div className='w-full | flex justify-between items-center'>
        <div className='flex gap-3'>
          <img className='w-14 h-full mr-1' src={avatar_test} />
          <div>
            <h3 className='text-gray900 text-xl font-semibold | mb-1'>Sarah Thompson</h3>
            <p className='text-gray600 text-lg font-normal'>Project Manager, Shopify</p>
          </div>
        </div>

        <div className='flex gap-8 justify-self-end'>
          <div className='bg-white p-4 | flex justify-center items-center | border border-blue100 rounded-full'>
            <img src={arrow_left} />
          </div>
          <div className='bg-white p-4 | flex justify-center items-center | border border-blue100 rounded-full'>
            <img src={arrow_right} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content