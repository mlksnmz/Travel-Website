import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';

function Slider() {
  const slides = [
    {
        url: 'https://cdn.tatilsepeti.com/Files/TurResim/33512/tsr33512638278006730699379.jpg',
      },
    {
      url: 'https://cdn.tatilsepeti.com/Files/TurResim/21782/tsr21782637971173610797482.jpg',
    },
    {
      url: 'https://cdn.tatilsepeti.com/Files/TurResim/26839/tsr26839638073217625790148.jpg',
    },

    {
      url: 'https://cdn.tatilsepeti.com/Files/TurResim/33811/tsr33811638285717989264266.jpg',
    },
    {
      url: 'https://cdn.tatilsepeti.com/Files/TurResim/30997/tsr30997638174218991378472.jpg',
    },
    {
        url: 'https://cdn.tatilsepeti.com/Files/TurResim/32920/tsr32920638294354401273952.jpg',
      },
    {
        url: 'https://cdn.tatilsepeti.com/Files/TurResim/32920/tsr32920638294354394620977.jpg',
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 1;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='text-white'>
    <div className='max-w-[1400px] mt-[-96px] w-full h-screen mx-auto py-28 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BiLeftArrowAlt onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BiRightArrowAlt onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Slider;