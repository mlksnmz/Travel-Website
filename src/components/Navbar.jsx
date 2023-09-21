import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 hover:text-black z-10'>
            <h1 className='w-full text-3xl font-bold text-[#db9a69] '>LIVRARIA TOUR</h1>
            <ul className=' hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Tours</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block  z-10'>
                {nav ? <AiOutlineClose size={15} /> : <AiOutlineMenu size={15} />
                }
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-100 bg-[#000300] ease-in-out duration-500 z-10' : 'ease-in-out duration-500 fixed left-[-100%] z-10'}>
                <h1 className='w-full text-3xl font-bold text-[#db9a69] '>LIVRARIA TOUR</h1>
                <li className='p-4 border-b border-white text-white'>Home</li>
                <li className='p-4 border-b border-white text-white'>Company</li>
                <li className='p-4 border-b border-white text-white'>Tours</li>
                <li className='p-4 border-b border-white text-white'>About</li>
                <li className='p-4 text-white'>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;