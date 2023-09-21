import React from 'react';

const Campaign = () => {
    const url = "https://cdn.tatilsepeti.com/Files/TurResim/21878/tsr21878637977174263774716.jpg";
  return (
    <div className='bg-white py-10 text-black px-1'>
      <div className=' w-full mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mt-center-2 hover:text-gray-600'>
             Tours Campaign
          </h1>
          <p>Make Your Holiday Advantageous With Campaigns</p>
          <button className='bg-[#e5b390] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-3 py-3 mt-12 hover:text-black'>
          More details
            </button>
        </div>
        <div className='my-1'>
        <img className='rounded -4xl w-800 h-85 mx-left-[2rem] mt-left-[2rem] bg-white' src={url} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Campaign;