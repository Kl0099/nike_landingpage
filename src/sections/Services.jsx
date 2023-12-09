import React from 'react'
import {services} from '../constants/index'
import ServiceCard from '../componants/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {
        services.map((service)=>{
          return(
            <ServiceCard key={service.label}
            imgURL={service.imgURL}
            subtext={service.subtext}
            label={service.label}
            />
          )
        })
      }
      </section>
  )
}

export default Services