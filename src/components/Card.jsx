import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion';
function Card({ width, start, para, hover=false }) {
    return (
        <motion.div whileHover={{backgroundColor:hover==='true'&& "#7443ff", padding:"25px"}} className={` bg-zinc-700 p-5 rounded-xl min-h-[30rem] hover:${hover} duration-700 flex flex-col justify-between text-white ${width}`}>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h3>one heading</h3>
                    <GoArrowRight />
                </div>
                <h1 className='text-3xl  mt-10 '>What ever heading</h1>
            </div>
            <div className='down w-full '>
                {start && (
                    <>
                        <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                        <button className='rounded-full border-[1px] px-5 py-2 mt-5'>Contact Us</button>
                    </>
                )
                }
           {
            para && <><p className='text-sm mt-5 mb-2 text-zinc-400 font-medium'>Lorem ipsum dolor sit amet.</p></>
           }

            </div>
        </motion.div>
    )
}

export default Card
