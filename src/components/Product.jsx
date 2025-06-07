import React from 'react'
import Button from './Button'

function Product({val, mover, count}) {
  return (
    <div className='w-full h-[23rem] py-20 text-white  ' onMouseEnter={()=>mover(count)}>
      <div className='max-w-screen-xl mx-auto hover:bg-[#7443ff] rounded-sm p-8  flex justify-between items-center  '>
        <h1 className='text-6xl font-semibold capitalize'>{val.Title}</h1>
        <div className='w-1/3'>
            <p className='mb-10'>{val.Discription}</p>
            <div className='flex items-center gap-10'>
            {val.case &&  <Button/>}
            {val.live &&  <Button text='Case Study'/>}
           
            </div>
        </div>
      </div>
    </div> 
  )
}

export default Product
