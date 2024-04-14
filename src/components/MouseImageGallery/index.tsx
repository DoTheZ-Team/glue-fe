'use client';

import { MouseEvent, useRef } from 'react';
import Image from 'next/image';

export default function MouseImageGallery() {
  let steps = 0;
  let currentIndex = 0;
  let nbOfImages = 0;
  const maxNumberOfImages = 10;
  // eslint-disable-next-line
  const refs: any[] = [];

  const getCurrentImages = () => {
    const images = [];
    const indexOfFirst = currentIndex - nbOfImages;
    for (let i = indexOfFirst; i < currentIndex; i += 1) {
      let targetIndex = i;
      if (targetIndex < 0) {
        targetIndex += refs.length;
      }
      images.push(refs[targetIndex].current);
    }
    return images;
  };

  const setZIndex = () => {
    const images = getCurrentImages();
    for (let i = 0; i < images.length; i += 1) {
      images[i].style.zIndex = i;
    }
  };

  const removeImage = () => {
    const images = getCurrentImages();
    images[0].style.display = 'none';
    nbOfImages -= 1;
  };

  const moveImage = (x: number, y: number) => {
    const currentImage = refs[currentIndex].current;
    currentImage.style.left = `${x}px`;
    currentImage.style.top = `${y}px`;
    currentImage.style.display = 'block';
    currentIndex += 1;
    nbOfImages += 1;
    setZIndex();

    const randomRotation = Math.random() * 360;
    currentImage.style.transform = `rotate(${randomRotation}deg)`;

    setTimeout(() => {
      removeImage();
    }, 2000);
  };

  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, movementX, movementY } = e;

    if (!movementX && !movementY) {
      return;
    }

    steps += Math.abs(movementX) + Math.abs(movementY);

    if (steps >= currentIndex * 150) {
      moveImage(clientX, clientY);

      if (nbOfImages === maxNumberOfImages) {
        removeImage();
      }
    }

    if (currentIndex === refs.length) {
      currentIndex = 0;
      steps = -150;
    }
  };

  return (
    <section onMouseMove={manageMouseMove}>
      {Array.from({ length: 20 }, (_, i) => i + 1).map((__, index) => {
        // eslint-disable-next-line
        const ref = useRef(null);
        refs.push(ref);

        return (
          // eslint-disable-next-line
          <div key={index}>
            <Image
              alt={`/images/${index + 1}.png alt`}
              ref={ref}
              src={`/images/${index + 1}.png`}
              className="max-w-100 max-h-100 object-contain hidden"
              fill
              sizes="100px"
            />
          </div>
        );
      })}
      <h1 className="text-[220px] z-30 absolute inset-0 flex justify-center items-center">
        Glue
      </h1>
    </section>
  );
}
