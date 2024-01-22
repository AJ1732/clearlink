import React from 'react'
import logo from '../../assets/img/logo.png'
import chev_down from '../../assets/icon/chevron_down.svg'

const Header = () => {
  return (
    <header className='max-w-[92rem] | m-auto mt-10 px-8 py-4 | font-semibold | bg-gray100 | flex justify-between items-center | border border-gray300 rounded-[6.25rem]'>
      {/* LOGO */}
      <div className='flex justify-center items-center gap-[0.63rem]'>
        <img src={logo} alt="Logo" />
        <h1 className='text-gray900 text-2xl'>ClearLink<span className='text-bluedark400'>.</span></h1>
      </div>

      {/* NAV LINKS */}
      <nav>
        <ul className='flex justify-center items-center gap-10 | text-gray500'>
          <li className='flex justify-center items-center gap-[0.38rem]'>
            <span>Products</span>
            <img src={chev_down} />
          </li>
          <li className='flex justify-center items-center gap-[0.38rem]'>
            <span>Solutions</span>
            <img src={chev_down} alt="" />
          </li>
          <li className='flex justify-center items-center gap-[0.38rem]'>
            <span>Resources</span>
            <img src={chev_down} />
          </li>
          <li className='flex justify-center items-center gap-[0.38rem]'>
            <span>Pricing</span>
            <img src={chev_down} />
          </li>
        </ul>
      </nav>

      {/* NAV BUTTONS */}
      <div className='flex justify-center items-center gap-2 | text-center leading-normal'>
        <button className='px-6 py-[0.875rem] | text-gray900 | border border-gray400 rounded-[6.25rem] '>Talk to Sales</button>
        <button className='px-6 py-[0.875rem] | text-white | bg-blue700 rounded-[6.25rem] '>Sign up for free</button>
      </div>
    </header>
  )
}

export default Header