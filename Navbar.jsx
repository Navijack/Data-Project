import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
      <h1 className='w-full text-3xl font-bold text-green-300'>DATA.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-green-300 m-4'>DATA.</h1>

        <ul className='pt-4 uppercase'>
          <li className='p-4 border-b border-neutral-600'>Home</li>
          <li className='p-4 border-b border-neutral-600'>Company</li>
          <li className='p-4 border-b border-neutral-600'>Resources</li>
          <li className='p-4 border-b border-neutral-600'>About</li>
          <li className='p-4 border-b border-neutral-600'>Contact</li>
        </ul>
      </div>
    </div >
  )
}
export default Navbar