import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import chev_down from '../../assets/icon/chevron_down.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false)
  console.log(open);

  return (
    <header className={`max-w-[92rem] relative | m-auto mt-10 px-8 py-4 | font-semibold | bg-gray100 | flex flex-col justify-between items-center gap-8 | border border-gray300 ${open? `rounded-md`: `rounded-[6.25rem]`}  | lg:flex-row`}>
      {/* LOGO */}
      <div className={`flex justify-center items-center gap-[0.63rem] | ${!open || `w-full pb-4 border-b border-b-gray300`}`}>
        <img className='w-[1.5865rem] h-full' src={logo} alt="Logo" />
        <h1 className='text-gray900 text-2xl'>ClearLink<span className='text-bluedark400'>.</span></h1>
      </div>

      {/* NAV LINKS */}
      <nav className={`${open || `hidden`} | lg:block`}>
        <ul className='flex flex-col justify-center items-start gap-8 | text-gray500 | sm:flex-row sm:items-center xl:gap-10'>
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
          </li>
        </ul>
      </nav>

      {/* NAV BUTTONS */}
      <div className={`${open? `flex`: `hidden`} | flex-col justify-center items-center gap-2 | text-center leading-normal | xl:flex sm:flex-row`}>
        <button className='px-6 py-[0.875rem] | text-gray900 | bg-white border border-gray400 rounded-[6.25rem] '>Talk to Sales</button>
        <button className='px-6 py-[0.875rem] | text-white | bg-blue700 rounded-[6.25rem] '>Sign up for free</button>
      </div>

      {/* TOGGLE BUTTON */}
      <div 
        className='absolute top-5 right-10 font-black text-2xl text-blue700 | lg:hidden'
        onClick={() => setOpen(!open)}  
      >
        {
          open?
          <IoClose />:
          <RxHamburgerMenu />
        }
      </div>
    </header>
  )
}

export default Header