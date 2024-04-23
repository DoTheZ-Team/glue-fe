'use client';

import { useState, useEffect } from 'react';
import { getBackgroundImageById } from '@/app/lib/dummyData';
import FileEdit from '../FileEdit';
import FileThumbnails from '../FileEdit/FileThumbnails';

export default function Background({ id }: { id: number }) {
  const [backgroundFile, setBackgroundFile] = useState<File | null>(null);

  useEffect(() => {
    const defaultBackgroundUrl = getBackgroundImageById(id);
    if (defaultBackgroundUrl) {
      fetch(defaultBackgroundUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const defaultBackgroundFile = new File([blob], 'background.jpeg', {
            type: 'image/jpeg',
          });
          setBackgroundFile(defaultBackgroundFile);
        })
        .catch((error) => {
          console.error('Error fetching background image:', error);
        });
    }
  }, [id]);

  return (
    <section className="flex flex-col items-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">Background</p>
      <div className="flex flex-col items-center gap-10">
        <FileThumbnails
          file={backgroundFile}
          deleteFileHandler={() => setBackgroundFile(null)}
          size="lg"
        />
        <FileEdit setFile={setBackgroundFile} />
      </div>
    </section>
  );
}
