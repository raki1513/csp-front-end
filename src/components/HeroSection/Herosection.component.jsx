import React from 'react'
import '../../App.css'
import Navbarcomponent from '../Navbar/Navbar.component';
const Herosectioncomponent = () => {
  function HeroLG (){
    return(
      <div className='h-screen bg-[#3E8E16]  bg-background h-full bg-no-repeat bg-bottom hover:bg-center duration-1000 ease-in-out bg-fixed'>
      <div id='container' className=''>
      <Navbarcomponent/>
      <div className='flex justify-center'>
        <h1 className='absolute text-2xl bottom-[10%] font-bold font-[Righteous] text-[17vh] text-white'
        id='text'
        >
          Plantation
        </h1>
      </div>
      </div>
      </div>
    )
  }
  function Herosm(){
    return(
    <div className='h-screen bg-[#3E8E16]  bg-background h-full bg-no-repeat bg-bottom hover:bg-center duration-1000 ease-in-out bg-fixed'>
    <div id='container' className=''>
    <Navbarcomponent/>
    <div className='flex justify-center'>
      <h1 className='absolute text-[5.2em] bottom-[3%] font-bold font-[Righteous] text-[17vh] text-white' id='text'>
        Plantation
      </h1>
    </div>
    </div>
    </div>
    )
  }
  return (
    <div>
      <div className='block md:hidden lg:hidden'>
<Herosm/>
      </div>
      <div className='hidden md:hidden lg:flex'>
<HeroLG />
      </div>
    </div>
  )
}

export default Herosectioncomponent;
