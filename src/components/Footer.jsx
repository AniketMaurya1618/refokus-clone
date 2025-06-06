import React from 'react'

function Footer() {
    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mt-10 mx-auto pt-10 flex gap-32'>

                <div className='basis-1/2'>
                    <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight text-white'>refokus.</h1>
                </div>

                <div className='basis-1/2 flex gap-4'>

                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                        {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                            <a className='block text-zinc-500 ' key={index}>{item}</a>
                        ))}
                    </div>

                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                        {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                            <a className='block text-zinc-500 ' key={index}>{item}</a>
                        ))}
                    </div>

                    <div className='basis-1/3 flex  flex-col gap-5 items-end'>
                        <p className='text-right text-zinc-500 mb-2 '>
                            Refokus is a pioneering digital agency driven by design and innovation.
                        </p>
                        <img src="https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bddf6c495c16eebdb45576_Refokus-w.svg" alt="Refokus Logo" />
                    </div>

                </div>
               
            </div>
             <div className='w-full '>
                <div className='max-w-screen-xl mx-auto flex gap-5 py-5'>
                    {["Pravicy Policy", "Cookie Policy", "Impressum", "Terms"].map(item=>( <a className='text-zinc-500 gap-20'>{item}</a>))
        
                    }
                </div>
                </div>
        </div>

    )
}

export default Footer
