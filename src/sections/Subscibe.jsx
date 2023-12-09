import React from 'react'
import Buttton from '../componants/Button'

const Subscibe = () => {
  return (
    <section className='max-container flex  justify-between items-center max-lg:flex-col gap-10' id='contact-us'>
      
      <h3 className='text-4xl leading-[68px] font-palanquin lg:max-w-md font-semibold' >Sign Up For <span className=' text-coral-red'>Updates </span> & Newsletter</h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-grey rounded-full'>
        <input type="text" 
        placeholder='subsciber@gmail.com'
        className='input'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Buttton 
          label ="sign up"
          />
        </div>
      </div>

    </section>
  )
}

export default Subscibe