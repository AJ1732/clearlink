import React from 'react'
import logo from '../../assets/img/logo.png'
import apple_download from '../../assets/img/apple_download.svg'
import get_it_on from '../../assets/img/get_it_on.svg'
import google_play from '../../assets/img/google_play.svg'
import google_play_logo from '../../assets/img/google_play_logo.svg'


const CTA = () => {
  return (
    <section className='max-w-[88rem] m-auto | pt-24 pb-12 | flex flex-col justify-center items-center gap-16 | text-center | xl:flex-row xl:justify-start xl:items-start xl:gap-0 xl:text-start'>
      {/* FOOTER HEADLINE */}
      <div className='grid gap-8 px-8 | xl:mr-[6.25rem] xl:px-0'>
        <div className='flex justify-center items-center gap-[0.63rem] | xl:justify-start'>
          <img className='w-[1.5865rem] h-full' src={logo} alt="Logo" />
          <h1 className='text-gray900 text-2xl font-semibold'>ClearLink<span className='text-bluedark400'>.</span></h1>
        </div>

        <p className='text-gray600 text-lg | xl:flex xl:flex-col '>
          <span>ClearLink is your gateway to effortless, high-</span>
          <span>quality video conferencing. Join us in shaping </span>
          <span>the future of communication!</span>
        </p>
      </div>

      {/* FOOTER NAV SECTION */}
      <div className='grid grid-cols-2 gap-12 | lg:grid-cols-4 xl:gap-8 xl:mr-8'>
        {/* Product Nav */}
        <nav className='grid gap-4 | min-w-40'>
          <h4 className='text-base text-gray500 font-semibold'>Product</h4>
          <ul className='text-lg text-gray600 font-semibold | grid gap-4'>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>

        {/* Company Nav */}
        <nav className='grid gap-4 | min-w-40'>
          <h4 className='text-base text-gray500 font-semibold'>Company</h4>
          <ul className='text-lg text-gray600 font-semibold | grid gap-4'>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        {/* Resources Nav */}
        <nav className='grid gap-4 | min-w-40'>
          <h4 className='text-base text-gray500 font-semibold'>Resources</h4>
          <ul className='text-lg text-gray600 font-semibold | grid gap-4'>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </nav>

        {/* Legal Nav */}
        <nav className='grid gap-4 | min-w-40'>
          <h4 className='text-base text-gray500 font-semibold'>Legal</h4>
          <ul className='text-lg text-gray600 font-semibold | grid gap-4'>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

      </div>

      {/* DOWNLOAD SECTION */}
      <div className='grid gap-4'>
        <h3 className='text-blue700 text-base font-semibold | mb-3'>Get the app</h3>
        <img src={apple_download} />
        <div className='h-10 w-[8.44rem] | bg-black | flex justify-center items-center gap-2 |border border-[#A6A6A6] rounded-[0.3125rem]'>
          <img src={google_play_logo} />
          <div>
            <img className='mb-[0.24rem]' src={get_it_on} />
            <img src={google_play} />
          </div>
        </div>


      </div>
    </section>
  )
}

export default CTA