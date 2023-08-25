import React from 'react'
import '../App.css'
import BaseHOC from '../layout/BaseHOC'
import Plant from '../assets/Group6.png'
import Herosectioncomponent from '../components/HeroSection/Herosection.component'
import Footercomponent from '../components/Footer/Footer.component'
const HomePage = () => {
  return (
    <div>
        <Herosectioncomponent/>
        <div className='flex h-screen items-center'>
            <div className=' mx-5 text-[64px] font-bold text-center font-[Montserrat]'>
                <h1>
                The key to Greener Planet is in our Hands
                </h1>
            </div>
            <div className='flex float-right flex-end px-5'>
            <img src={Plant} alt="Plant Logo"  className='py-5 w-[58rem]'/>
            </div>
        </div>
        <Footercomponent/>
    </div>
  )
}

export default HomePage
