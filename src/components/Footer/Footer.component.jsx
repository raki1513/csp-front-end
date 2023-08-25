import React from 'react'
import {BsInstagram,BsGithub,BsYoutube} from 'react-icons/bs'
import {motion} from 'framer-motion'
const Footercomponent = () => {
  return (
    <>
        <div className='bg-[#3E8E16] h-[8vh] flex items-center'>
            <div className='flex items-center text-white py-3'>
            <h1 className='font-[poppins] text-2xl px-2'>
            ©
            </h1>
            <h1 className='font-[poppins]'>
             Copyrighted by Team NEC 3rd Year AI
            </h1>
            </div>
            <div className='flex-1 px-10 my-3'>
                <ul className='flex justify-end'>
                    <motion.li className='px-4' whileHover={{ scale: 2.0 }} whileTap={{ scale: 1 }}><BsInstagram size={25} color='#d62976'/></motion.li>
                    <motion.li className='px-4' whileHover={{ scale: 2.0 }} whileTap={{ scale: 1 }}><BsGithub size={25}/></motion.li>
                    <motion.li className='px-4' whileHover={{ scale: 2.0 }} whileTap={{ scale: 1 }}><BsYoutube size={25} color='red'/></motion.li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footercomponent;
