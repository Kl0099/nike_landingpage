import React from 'react'
import { offer } from '../assets/images'
import Buttton from '../componants/Button'
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={687} className=' object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
      <p className='text-xl font-montserrat text-coral-red'>Our Summer collections</p>
        <h2 className='mt-10 font-palanquin text-4xl  capitalize  font-semibold lg:max-w-lg'>
          <span className=' text-coral-red'>Special</span> offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Buttton 
        label = {"view details"}
        iconURL={arrowRight}
        />
        <button className='flex justify-center items-center gap-2 px-7 py-4 leading-none font-montserrat text-lg
     bg-white text-grey border rounded-full'> learn more
        </button>
        </div>

      </div>
    </section>
  )
}

export default SpecialOffer