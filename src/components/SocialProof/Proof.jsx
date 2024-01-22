import React from 'react'
import shopify from '../../assets/icon/shopify.svg'
import coinbase from '../../assets/icon/coinbase.svg'
import dropbox from '../../assets/icon/dropbox.svg'
import intercom from '../../assets/icon/intercom.svg'
import marvel from '../../assets/icon/marvel.svg'
import automattic from '../../assets/icon/automattic.svg'

const Proof = () => {
  return (
    <section className='h-[2.685rem] | mt-4 py-20 bg-white | grid place-items-center gap-12'>
      <h2 className='text-gray600 font-medium text-xl text-center'>Join 1,500+ companies already video conferencing the ClearLink way</h2>
      <div className='flex gap-[4.31rem]'>
        <img src={shopify} />
        <img src={coinbase} />
        <img src={dropbox} />
        <img src={intercom} />
        <img src={marvel} />
        <img src={automattic} />
      </div>
    </section>
  )
}

export default Proof