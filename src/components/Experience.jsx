import React from 'react';


const Experience = () => {
  const url = "https://cdn.getyourguide.com/img/tour/56c9b545748ff.jpeg/99.jpg";
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={url} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#db9a69] font-bold '>Travel memories you'll never forget</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>PASSION FOR TRAVEL</h1>
          <p>
          We love to travel and we love to share. We believe that travel should be more than business, it should be a way of life. For us, travel is not indulging, it is engaging with people, cultures, and destinations that are foreign to our own.
          </p>
          <button className='bg-black text-[#db9a69] w-[240px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:text-white'>Browse Our Collections</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;