'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Common';

function Slider({ photos }: { photos: string[] }) {
  const temp = '/tempImage/6.jpg';
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(photos.length / 5) - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(photos.length / 5) - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      <div
        className="flex transform transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo) => (
          <div key={photo} className="relative flex-none w-1/5 h-200">
            <div className="w-full h-full">
              <Image
                alt="photo"
                src={photo || temp}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <Button
          className="p-2 bg-[#f1efef] rounded-full opacity-50 hover:opacity-90"
          onClick={prevSlide}
        >
          &lt; Prev
        </Button>
        <Button
          className="p-2 bg-[#f1efef] rounded-full opacity-50 hover:opacity-90"
          onClick={nextSlide}
        >
          Next &gt;
        </Button>
      </div>
    </div>
  );
}

export default Slider;
