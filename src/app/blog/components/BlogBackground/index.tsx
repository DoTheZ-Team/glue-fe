import React from 'react';
import Image from 'next/image';
import bg from '/public/images/bg-temp.jpeg';

export default function BlogBackground() {
  const intro = 'Just keep swimming 🏄🏿‍♂️';
  return (
    <div className="w-full h-screen">
      <div className="relative w-full h-full group">
        <Image
          src={bg}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-50"
        />

        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-pretendard font-bold">
          {intro}
        </div>
      </div>
    </div>
  );
}
