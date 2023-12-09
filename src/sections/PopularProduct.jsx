import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../componants/PopularProductCard'

const PopularProduct = () => {
  return (
    <section id="products"
    className=' max-container max-sm:mt-12 '
    >
      <div
      className='flex flex-col gap-5 justify-start'
      >
        <h2
        className='text-4xl font-semibold font-palanquin'
        >Our <span className=' text-coral-red'>Popular</span> Products</h2>
        <p className=' lg:max-w-lg font-montserrat text-slate-gre
        '>Experience top-notch quality and style with our sought-afterselections.<br/> Discover a world of comfort,design,and value</p>
      </div>
      <div className=' flex  items-center justify-between mt-16  gap-14 flex-wrap'>
        {
          products.map((product)=>{
            return(
              <div className='flex flex-wrap'>
                <PopularProductCard
              key={product.name}
              {...product}
              />
              </div>
            )
          })
        }

      </div>

    </section>
  )
}

export default PopularProduct