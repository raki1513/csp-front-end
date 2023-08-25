import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const Buttoncomponent = (props) => {
    const {name} = props
  return (
    <div className='flex items-center justify-center'>
      <Link to={name} >
    <motion.button className='w-auto h-[5vh] px-[4vh] bg-[#cf845a] rounded-md font-[poppins] shadow-xl ' whileHover={{ scale: 1.2 }}
     whileTap={{ scale: 0.8 }}
     transition={{
      duration:0.3
     }}
     >
        {name}
    </motion.button>
    </Link>
    </div>
  )
}

export default Buttoncomponent
