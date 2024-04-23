import { Close } from '@/components/Common';
import Image from 'next/image';
import React from 'react';

type FileThumbnailsProps = {
  file: File | null;
  deleteFileHandler?: () => void;
  size?: 'sm' | 'lg';
};

export default function FileThumbnails({
  file,
  deleteFileHandler,
  size = 'sm',
}: FileThumbnailsProps) {
  const containerSize = size === 'sm' ? 'w-250 h-300' : 'w-500 h-250';
  return (
    <div>
      {file ? (
        <div className={`relative ${containerSize} border border-[#afacac] `}>
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            placeholder="blur"
            blurDataURL={URL.createObjectURL(file)}
            layout="fill"
            objectFit="cover"
          />
          {deleteFileHandler && (
            <div
              className="absolute top-0 right-0 cursor-pointer"
              onClick={deleteFileHandler}
            >
              <Close className="m-3" />
            </div>
          )}
        </div>
      ) : (
        <div className="w-250 h-300 bg-gray-200 flex justify-center items-center">
          No profile selected
        </div>
      )}
    </div>
  );
}
