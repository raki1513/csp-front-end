import React from 'react'

const Inputcomponent = (props) => {
    const {type,place} = props
  return (
    <div className='my-[7vh]'>
    <input type={type} placeholder={place} className='border-4 w-[50vh] h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]'/>
    </div>
  )
}

export default Inputcomponent
