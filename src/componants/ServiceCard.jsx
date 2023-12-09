import React from 'react'
import {services} from '../constants'

const ServiceCard = ({imgURL,
  label,
  subtext}) => {
  return (
    <div className='flex-1 flex justify-start items-center sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      {/* <div className='w-11 h-11 justify-center items-center bg-corel-red rounded-full flex '>
       <img src={imgURL} alt={label} width={24} height={24}  />
        
      </div> */}
      <div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal'>{label}</h3>
      <p className='mt-3 break-words font-montserrat leading-normal'>{subtext}</p>
      </div>
      
      </div>
  )
}

export default ServiceCard