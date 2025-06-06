import React from 'react'

function Stripe({val, index}) {
    return (
            <div className='w-[16.66%] border-[1.2px] px-4 py-5 border-zinc-600 flex items-center justify-between'>
                <img className='h-6 ' src={val.Url} alt={`logo-${index}`} />
                <h1 className='text-white text-xl font-medium'>{val.Number}</h1>
            </div>
            
    )
}

export default Stripe
