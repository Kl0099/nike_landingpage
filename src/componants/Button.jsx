import React from 'react'

const Button = (props) => {
  return (
    <button 
    className={`flex justify-center items-center gap-2 px-7 py-4 leading-none font-montserrat text-lg
     bg-coral-red text-white border-coral-red rounded-full`}
    >{props.label}
    
     {props.iconURL && <img src={props.iconURL} alt="icon" className='w-5 h-5 rounded-full ml-2 ' />
     }
    </button>

    
    // <button classname="">
    //   {props.label}
    //   <img src={props.iconURL}
    //   alt='arrow'
    //   className='ml-2 rounded-full w-5 h-5 '
    //    />
    // </button>
  )
}

export default Button