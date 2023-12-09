import React from 'react'
import {footerLogo} from "../assets/images"
import {    
  footerLinks, 
  socialMedia} from '../constants'
  import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer>
      <div className=' max-container '>
        <div className=' flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
          <div className=' flex flex-col items-start'>
            <a href="/">
              <img src={footerLogo} alt="logo"
              width={150}
              height={46}
              />

            </a>
            <p className=' text-white mt-6 text-base leading-7 sm:max-w-sm capitalize'>Get shoes ready for the new term at your nearest nike sore.find your perfect size in store.get reward</p>
            <div className=' flex mt-6 gap-6'>
            {
              socialMedia.map((icon)=>{
                return(
                  <div key={icon.alt}
                  className=' flex justify-center items-center w-12 h-12 bg-white rounded-full'
                  >
                    <img src={icon.src} alt={icon.alt} 
                    width={24}
                    height={24}
                    
                    />

                  </div>
                )
              })
            }
            </div>
          </div>
          <div className=' flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap  font-montserrat'>
            {
              footerLinks.map((section)=>{
                return(
                  <div key={section.title} className=''>
                    <h4 className='text-white text-2xl leading-normal font-medium m-2'>{section.title}</h4>
                    <ul className=' m-2'>
                      {
                        section.links.map((link)=>{
                          return(
                            <li>
                              <a href={link.link} className=' text-white'>{link.name}</a>
                            </li>
                          )
                        })
                      }
                    </ul>

                  </div>
                )
              })
            }

          </div>

        </div>
      <div className='flex flex-1 justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'> 
      <div className=' flex justify-between  items-center cursor-pointer'>
        <img src={copyrightSign} alt="copyright"
        width={20}
        height={20}
        className=' rounded-full m-0'
        />
        <p>
          copyright. All rights Reserved.
        </p>
      </div>
      <p>terms & conditions</p>
      </div>
      </div>


    </footer>
  )
}

export default Footer