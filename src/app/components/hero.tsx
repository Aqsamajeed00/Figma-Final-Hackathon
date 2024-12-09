import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section>
      <div className='container px-8 py-12'>
        <div className='content-wrapper flex flex-col md:flex-row'>
          <div className='text-area w-full md:w-[60%] h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between'>
            <div>
              <h1 className='headline text-xl md:text-3xl md:text-left'>
                The furniture brand for the future with <br /> timeless designs
              </h1>
              <div className='button-wrapper flex justify-center md:justify-start'>
                <button className='btn w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-12'>
                  View collection
                </button>
              </div>
            </div>
            <div className='description my-4 md:my-0'>
              <p className='details text-sm md:text-base md:text-left'>
                A new era in eco-friendly furniture with Avion, the French luxury retail brand
                <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                <br /> using modern web technologies.
              </p>
            </div>
          </div>

          <div className='image-area w-full md:w-[40%] h-auto md:h-[580px] bg-white mb-[200px] mt-3 flex justify-center items-end'>
            <Image src='/images/chair.png' width={480} height={475} alt='right' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


// Created By Aqsa Majeed.....