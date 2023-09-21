import React from 'react';

const Newsletter = () => {
  return (
    <div className='bg-white w-full py-16 text-black px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 hover:text-gray-400'>
          Find Out The Most Recommended Tours
          </h1>
          <p>Let us help make your search a bit easier.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-white'
              type='email'
              placeholder='Email'
            />
            <button className='bg-[#e5b390] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:text-black'>
           Contact Me!
            </button>
          </div>
          <p>
            Contact me for informing{' '}
            <span className='text-[#e5b390] px-2'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;