import React from 'react'
import {reviews} from '../constants'
import ReviewCard from '../componants/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container '> 
    <h3 className=" font-montserrat text-center text-4xl font-semibold">What Our <span className=' text-coral-red'>Customers</span> Say?</h3>
    <p className='info-text m-auto mt-4 max-w-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae totam nostrum sequi nulla architecto.</p>
    <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {
        reviews.map((review)=>{
          return(
            <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            />
          )
        })
      }

    </div>
      
      
    </section>
  )
}

export default CustomerReviews