import React from 'react'
import robot from '../../assets/icon/robot.svg'
import star from '../../assets/icon/star.svg'
import avatar_1 from '../../assets/img/avatar_1.png'
import avatar_2 from '../../assets/img/avatar_2.png'
import avatar_3 from '../../assets/img/avatar_3.png'
import avatar_4 from '../../assets/img/avatar_4.png'
import avatar_5 from '../../assets/img/avatar_5.png'
import animoji_1 from '../../assets/img/animoji_1.png'
import animoji_2 from '../../assets/img/animoji_2.png'
import animoji_3 from '../../assets/img/animoji_3.png'
import animoji_4 from '../../assets/img/animoji_4.png'
import animoji_5 from '../../assets/img/animoji_5.png'
import animoji_6 from '../../assets/img/animoji_6.png'
import microphone from '../../assets/icon/microphone.svg'
import video_recorder from '../../assets/icon/video_recorder.svg'
import monitor from '../../assets/icon/monitor.svg'
import face_smile from '../../assets/icon/face_smile.svg'
import message_text_circle from '../../assets/icon/message_text_circle.svg'
import settings from '../../assets/icon/settings.svg'


const Hero = () => {
  return (
    <section className='max-w-[88rem] m-auto pb-24 pt-40 | flex justify-between items-center'>
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
      <div className="max-w-[32.5rem] p-8 | grid place-items-center gap-10 | bg-blue50 border border-blue200 rounded-2xl">
        <div className='grid grid-cols-3 place-items-end gap-5'>
          <img className='w-40 h-full | bg-orangedark300 rounded-xl' src={animoji_1} />
          <img className='w-40 h-full | bg-primary300 rounded-xl' src={animoji_2} />
          <img className='w-40 h-full | bg-moss300 rounded-xl' src={animoji_3} />
          <img className='w-40 h-full | bg-bluegray300 rounded-xl' src={animoji_4} />
          <img className='w-40 h-full | bg-warning300 rounded-xl' src={animoji_5} />
          <img className='w-40 h-full | bg-rose300 rounded-xl' src={animoji_6} />
        </div>
        <div className='flex justify-center items-center gap-4'>
          <div className='w-11 bg-white p-3 border border-blue100 rounded-full'>
            <img src={microphone} />
          </div>
          <div className='w-11 bg-white p-3 border border-blue100 rounded-full'>
            <img src={video_recorder} />
          </div>
          <div className='w-11 bg-white p-3 border border-blue100 rounded-full'>
            <img src={monitor} />
          </div>
          <div className='w-11 bg-white p-3 border border-blue100 rounded-full'>
            <img src={face_smile} />
          </div>
          <div className='w-11 bg-white p-3 border border-blue100 rounded-full'>
            <img src={message_text_circle} />
          </div>
          <div className='w-11 bg-white p-3 border border-blue100 rounded-full'>
            <img src={settings} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero