import React from 'react'
import robot from '../../assets/icon/robot.svg'
import star from '../../assets/icon/star.svg'
import avatar_1 from '../../assets/img/avatar_1.png'
import avatar_2 from '../../assets/img/avatar_2.png'
import avatar_3 from '../../assets/img/avatar_3.png'
import avatar_4 from '../../assets/img/avatar_4.png'
import avatar_5 from '../../assets/img/avatar_5.png'


const Hero = () => {
  return (
    <section className='max-w-[88rem] m-auto pb-24 pt-40 | '>
      {/* HERO CONTENT */}
      <div className='max-w-[48.8rem] | grid gap-12'>
        <div className='grid gap-6'>
          <h2 className='mt-6 | text-[4rem] font-semibold leading-[1.15] | flex flex-col'>
            <span>Uniting the world,</span>
            <span>one video call at a time</span>
          </h2>
          <p className='text-gray500 text-2xl font-normal | flex flex-col'>
            <span>Experience the future of communication with ClearLink –</span>
            <span>where crystal-clear video conferencing meets</span>
            <span>unparalleled simplicity.</span>
          </p>
        </div>

        <div className='font-semibold | flex justify-start items-center gap-5'>
          <button className='px-7 py-4 | text-white | bg-blue700 rounded-[6.25rem] '>Start your free trial</button>
          <div className='flex justify-start items-center gap-3'>
            <img src={robot} />
            <p className='text-blue700 text-[1.125rem]'>Discover AI assistant</p>
          </div>
        </div>

        <div className='flex justify-start items-center'>
          <div className='flex justify-start items-center | mr-4'>
            <img className='h-10 w-10' src={avatar_1} />
            <img className='h-10 w-10 | -m-4' src={avatar_2} />
            <img className='h-10 w-10' src={avatar_3} />
            <img className='h-10 w-10 | -m-4' src={avatar_4} />
            <img className='h-10 w-10' src={avatar_5} />
          </div>

          <div>
            <div className='flex justify-start items-center'>
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <p className='text-gray700 font-semibold | ml-2'>5.0</p>
            </div>
            <p className='font-medium text-gray600'>from 3,000+ reviews</p>
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div>

      </div>
      Hero
    </section>
  )
}

export default Hero