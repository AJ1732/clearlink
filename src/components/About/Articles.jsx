import React from 'react'
import video_recorder from '../../assets/icon/video_recorder.svg'
import recording from '../../assets/icon/recording.svg'
import calender from '../../assets/icon/calender.svg'
import lock_unlocked from '../../assets/icon/lock_unlocked.svg'

const Articles = () => {
  return (
    <div className='grid grid-cols-1 gap-y-10 gap-x-[3.75rem] | max-w-[50rem] | md:grid-cols-2'>
      {/* FIRST ARTICLE */}
      <article className='max-w-[22.5rem] | grid place-items-center text-center | md:place-items-start md:text-start'>
        <div className='bg-gray50 | w-fit mb-5 p-4 | flex justify-center items-center | border border-gray200 rounded-full'>
          <img src={video_recorder} alt="" />
        </div>
        <h3 className='text-gray900 text-2xl font-semibold | mb-2'>Crystal-clear HD video</h3>
        <p className='text-gray600 text-lg font-normal '>No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
      </article>

      {/* SECOND ARTICLE */}
      <article className='max-w-[22.5rem] | grid place-items-center text-center | md:place-items-start md:text-start '>
        <div className='bg-gray50 | w-fit mb-5 p-4 | flex justify-center items-center | border border-gray200 rounded-full'>
          <img src={recording} alt="" />
        </div>
        <h3 className='text-gray900 text-2xl font-semibold | mb-2'>Noise-canceling audio</h3>
        <p className='text-gray600 text-lg font-normal '>Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</p>
      </article>

      {/* THIRD ARTICLE */}
      <article className='max-w-[22.5rem] | grid place-items-center text-center | md:place-items-start md:text-start '>
        <div className='bg-gray50 | w-fit mb-5 p-4 | flex justify-center items-center | border border-gray200 rounded-full'>
          <img src={calender} alt="" />
        </div>
        <h3 className='text-gray900 text-2xl font-semibold | mb-2'>Scheduling made easy</h3>
        <p className='text-gray600 text-lg font-normal '>Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</p>
      </article>

      {/* FOURTH ARTICLE */}
      <article className='max-w-[22.5rem] | grid place-items-center text-center | md:place-items-start md:text-start '>
        <div className='bg-gray50 | w-fit mb-5 p-4 | flex justify-center items-center | border border-gray200 rounded-full'>
          <img src={lock_unlocked} alt="" />
        </div>
        <h3 className='text-gray900 text-2xl font-semibold | mb-2'>Bank-grade security</h3>
        <p className='text-gray600 text-lg font-normal '>Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
      </article>
    </div>
  )
}

export default Articles