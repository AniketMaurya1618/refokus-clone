import React from 'react'
import { motion } from 'framer-motion'

function Marque({ imgaesUrl, direction }) {
  return (
    <div className=' flex w-full overflow-hidden'>
      <motion.div className='flex flex-shrink-0 gap-20 py-10 pr-40'
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 15, }}
      >
        {imgaesUrl.map((url) => <img className='w-26 ' src={url} />)}
      </motion.div>
      <motion.div className='flex flex-shrink-0 gap-20 py-10 pr-40'
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 15, }}
      >
        {imgaesUrl.map(url => <img className='w-26 ' src={url} />)}
      </motion.div>

    </div>
  )
}

export default Marque
