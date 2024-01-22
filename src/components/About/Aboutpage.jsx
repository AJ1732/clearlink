import React from 'react'
import Headline from './Headline'
import Groupimg from './Groupimg'
import Articles from './Articles'

const Aboutpage = () => {
  return (
    <section className='max-w-[88rem] bg-white | m-auto py-24 | grid gap-20'>
      <Headline />
      <div className='flex justify-between items-center'>
        <Articles />
        <Groupimg />
      </div>
    </section>
  )
}

export default Aboutpage