import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
    var products = [
        { Title: "arqitel", Discription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere, corporis numquam repudiandae accusamus quidem. this is the grate ", live: true, case: "true" },
        { Title: "TTR", Discription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere, corporis numquam repudiandae accusamus quidem. this is the gratethis is the grate", live: true, case: "true" },
        { Title: "YIR 2022", Discription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere, corporis numquam repudiandae accusamus quidem. this is the grate", live: true, case: "true" },
        { Title: "YAH", Discription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere, corporis numquam repudiandae accusamus quidem. this is the grate", live: true, case: "true" }

    ]
const [pos, setPos] = useState(0)
const mover = (val)=>{
    setPos(val*23)
}




    return (
        <div className='mb-24
         relative'>
            {products.map((val, index) => (
                <Product val={val} mover={mover} count={index} />
            ))}
            <div className='w-full h-full absolute top-0 pointer-events-none'>
                <motion.div className='w-[30rem] h-[23rem] absolute left-[42%] bg-white  overflow-hidden'
                initial={{y:pos, x:"-50%"}}
                transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
                animate={{y:pos+'rem'}}
                >
                    <motion.div animate={{y:-pos+`rem`}}
                    transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
                    className='w-full h-full  bg-sky-200'>
                       
                    </motion.div>
                    <motion.div animate={{y:-pos+`rem`}}
                    transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
                    className='w-full h-full  bg-sky-300'></motion.div>
                    <motion.div animate={{y:-pos+`rem`}}
                    transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
                    className='w-full h-full  bg-sky-400'></motion.div>
                    <motion.div animate={{y:-pos+`rem`}}
                    transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
                    className='w-full h-full  bg-sky-500'></motion.div>
                    
                </motion.div>

            </div>
        </div>

    )
}

export default Products
