import React from 'react';
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter
} from 'react-icons/bi';

const Footer = () => {

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#db9a69] hover:text-black'>LIVRARIA TOUR COMPANY</h1>
        <p className='py-4'>The opportunity to explore and discover should be available to more than just a few. We offer quality and economy and our partners are as passionate as we are. They know their own backyards and love to walk you through them. As a marketplace, we can offer many choices, to many different types of travelers, to many destinations, and we stand by each and every one.</p>
        <div className='flex justify-between md:w-[50%] my-6'>
            <BiLogoFacebookCircle size={30} />
            <BiLogoInstagram size={30} />
            <BiLogoTwitter size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6 '>
    <div>
        <ul>
            <li className='py-2 text-sm  hover:text-[#514d4a]'>About</li>
            <li className='py-2 text-sm  hover:text-[#514d4a]'>Blog</li>
            <li className='py-2 text-sm  hover:text-[#514d4a]'>The Gallery</li>
        </ul>

    </div>
    <div>
        <ul>
            <li className='py-2 text-sm  hover:text-[#514d4a]'>Destinations</li>
            <li className='py-2 text-sm  hover:text-[#514d4a]'>Collections</li>
  
        </ul>
    </div>

    <div>
        <ul>
            <li className='py-2 text-sm  hover:text-[#514d4a]'>Policy</li>
            <li className='py-2 text-sm  hover:text-[#514d4a]'>Terms</li>
            <li className='py-2 text-sm  hover:text-[#514d4a]'>Works</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;