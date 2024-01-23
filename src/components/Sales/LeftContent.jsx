import React from 'react'
import './sales.css'

const LeftContent = () => {
  return (
    <div className='mt-16'>
      <h3 className='text-gray900 text-5xl font-semibold | flex flex-col gap-3 | mb-8'>
        <span>Ready to clear the path to</span> 
        <span>perfect communication?</span>
      </h3>
      <ul className='sales_list | text-gray600 text-2xl | flex flex-col gap-5 | pl-4 mb-10'>
        <li>30 days free trial</li>
        <li>Cancel at any time</li>
        <li>Access to all features</li>
        <li>Peronalized onboarding</li>
      </ul>
      <div className='flex gap-2'>
        <button className='text-gray900 font-semibold | py-[0.88rem] px-6 | border border-gray400 rounded-[6.25rem]'>Talk to sales</button>
        <button className='text-white font-semibold | bg-blue700 | py-[0.88rem] px-6 | rounded-[6.25rem]'>Start your free trial</button>
      </div>
    </div>
  )
}

export default LeftContent