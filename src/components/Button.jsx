import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button({text="Get Started "}) {
  return (
    <div className='bg-white px-4 py-1  min-w-40 rounded-full text-black flex items-center justify-between '>
        <span className='text-sm font-medium'>{text}</span>
        <BsArrowReturnRight />
    
    </div>
  )
}

export default Button
