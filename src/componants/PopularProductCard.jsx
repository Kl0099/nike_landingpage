import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name,price,rating}) => {
  return (
    <div className=' flex flex-wrap flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px] object-contain' />
      <div
      className=' mt-8 flex justify-start gap-2.5 '
      >
        <img src={star} alt="star" width={24} height={24} />
        <p className=' font-montserrat text-xl text-slate-grey leading-normal'>{rating}</p>
      </div>
      <h3 className=' mt-2 max-sm:text-2xl text-xl leading-normal font-semibold font-palanquin text-slate-gray '>{name}</h3>
      <p  className="text-coral-red font-semibold font-montserrat leading-none text-xl">{price}</p>
    </div>
  )
}

export default PopularProductCard