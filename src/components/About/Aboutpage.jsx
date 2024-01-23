import React from 'react'
import Headline from './Headline'
import Groupimg from './Groupimg'
import Articles from './Articles'

const Aboutpage = () => {
  return (
    <section className='max-w-[88rem] bg-white | m-auto py-24 | flex flex-col justify-start gap-20'>
      <Headline />
      <div className='flex flex-col justify-between items-center gap-80 | xl:flex-row xl:gap-0'>
        <Articles />
        <Groupimg />
      </div>
    </section>
  )
}

export default Aboutpage