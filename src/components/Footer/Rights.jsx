import React from 'react'
import linkedin from '../../assets/icon/linkedin.svg'
import twitter from '../../assets/icon/twitter.svg'
import facebook from '../../assets/icon/linkedin.svg'
import instagram from '../../assets/icon/instagram.svg'
import github from '../../assets/icon/github.svg'
import youtube from '../../assets/icon/youtube.svg'

const Rights = () => {
  return (
    <section className='bg-gray50 py-12'>
      <div className='max-w-[88rem] m-auto | flex justify-between items-center'>
        <p className='text-gray500 text-base font-normal'>© 2023 ClearLink. All rights reserved.</p>
        <div className='flex justify-center items-center gap-6'>
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={github} alt="github" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </section>
  )
}

export default Rights