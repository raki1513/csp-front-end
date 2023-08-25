import React from 'react'

const Menucomponent = () => {
  return (
    <div>
  <select className='my-[7vh] h-[5vh] w-[50vh] bg-[#A8D692] border-4 font-[Montserrat] px-2'>
  <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Trans">Trans</option>
    <option value="Others">Others🌈</option>
  </select>
    </div>
  )
}

export default Menucomponent
