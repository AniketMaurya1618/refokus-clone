import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

// ✅ Import video files from src/assets
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';
import video3 from '../assets/3.mp4';
import video4 from '../assets/4.mp4';

function Products() {
    const products = [
        { Title: "arqitel", Discription: "Description 1", live: true, case: "true" },
        { Title: "TTR", Discription: "Description 2", live: true, case: "true" },
        { Title: "YIR 2022", Discription: "Description 3", live: true, case: "true" },
        { Title: "YAH", Discription: "Description 4", live: true, case: "true" }
    ];

    const [pos, setPos] = useState(0);

    const mover = (val) => {
        setPos(val * 23);
    };

    const videos = [video1, video2, video3, video4];

    return (
        <div className='mb-24 relative'>
            {products.map((val, index) => (
                <Product key={index} val={val} mover={mover} count={index} />
            ))}

            <div className='w-full h-full absolute top-0 pointer-events-none object-cover'>
                <motion.div
  className='w-[26rem] h-[300px] absolute left-[42%] overflow-hidden'
  initial={{ y: pos, x: "-50%" }}
  animate={{ y: `${pos}rem` }}
  transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
>
  {/* Video stack container */}
  <motion.div
    className="flex flex-col"
    animate={{ y: `-${pos}rem` }}
    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
  >
    {videos.map((vid, index) => (
      <div className="w-full h-full flex items-center justify-center">
  <video
    className={`h-[23rem] rounded-md object-cover ${index===index ? "block" : "hidden"}`}
    src={vid}
    autoPlay
    muted
    loop
    controls
  />
</div>
    ))}
  </motion.div>
</motion.div>

            </div>
        </div>
    );
}

export default Products;
