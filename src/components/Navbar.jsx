import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-green-300'>DATA.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to='company' smooth={true} duration={500}>
            Company
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-green-300 m-4'>DATA.</h1>
        <ul className='pt-4 uppercase'>
          <li className='p-4 border-b border-neutral-600 cursor-pointer'>
            <Link onClick={handleNav} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='p-4 border-b border-neutral-600 cursor-pointer'>
            <Link onClick={handleNav} to='company' smooth={true} duration={500}>
              Company
            </Link>
          </li>
          <li className='p-4 border-b border-neutral-600 cursor-pointer'>
            <Link onClick={handleNav} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='p-4 border-b border-neutral-600 cursor-pointer'>
            <Link onClick={handleNav} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
