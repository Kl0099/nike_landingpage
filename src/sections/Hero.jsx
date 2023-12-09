import React from 'react'
import Buttton from '../componants/Button';
import {arrowRight} from '../assets/icons'
import {statistics} from '../constants/index'
import { bigShoe1 } from '../assets/images';
import { shoes } from '../constants/index';
import ShoeCard from '../componants/ShoeCard'

const Hero = () => {
  return (
    // <h1>hii</h1>
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      
      <div
      className='relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28 '
      >
        <p className='text-xl font-montserrat text-coral-red'>Our Summer collections</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-semibold'><span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 '>The New Arrival</span><br />
        <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>
        <p className=' text-slate-gray text-lg font-montserrat leading-8 mt-6 mb-14 sm:max-w-sm '>
          Discover stylish Nike arrivals, quality <br/>comfort, and innovation for your active life.
        </p>
        <Buttton 
        label = {"shop now"}
        iconURL = {arrowRight}
        />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {
            statistics.map((stat)=>{
              return(
                <div key={stat.id}>
                  <p className=' text-4xl font-montserrat font-bold'>{stat.value}</p>
                  <p className=' leading-7 font-montserrat text-slate-grey '>{stat.label}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoe1} alt="shoe1" width={610} height={500} className=' object-contain relative z-10 ' />
      </div>
      

        

    </section>
  )
}

export default Hero