import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,
    customerName,
    rating,
    feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="img"  className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className=' mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='flex gap-2 justify-center items-center'>
            <img src={star} alt="star" width={24} height={24}
            className='object-contain m-0'/>
            <p className='text-xl font-montserrat '>{rating}</p>
        </div>
        <h3 className='mt-3 font-montserrat text-slate-gray text-2xl text-center font-semibold'>{customerName}</h3>

    </div>
  )
}

export default ReviewCard