'use client';

import { useState } from 'react';
import { FileEdit, FileThumbnails } from '../Common';
import { useMyPageContext } from '../MyPageFetcher/MyPageContext';

export default function Background() {
  const { myPageData, handleImageUpload } = useMyPageContext()!;
  const { background } = myPageData;

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (newFile: File | null) => {
    setFile(newFile);
    if (newFile) {
      handleImageUpload(newFile, 'background');
    }
  };

  return (
    <section className="flex flex-col items-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">Background</p>
      <div className="flex flex-col items-center gap-10">
        <FileThumbnails
          file={file}
          defaultImage="/tempImage/bg.jpeg"
          currentImage={background}
          deleteFileHandler={() => setFile(null)}
          size="lg"
        />
        <FileEdit onFileSelect={handleFileChange} />
      </div>
    </section>
  );
}
