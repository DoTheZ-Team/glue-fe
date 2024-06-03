'use client';

import { useState } from 'react';
import { Input } from '@/components/Common';
import { FileEdit, FileThumbnails } from '../Common';
import { useMyPageContext } from '../MyPageFetcher/MyPageContext';

export default function Profile() {
  const { myPageData, handleImageUpload, setMyPageData } = useMyPageContext();
  const { profile, nickname } = myPageData;
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState(nickname);

  const handleFileChange = (newFile: File | null) => {
    setFile(newFile);
    if (newFile) {
      handleImageUpload(newFile, 'profile');
    }
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
    setMyPageData((prevData) => ({
      ...prevData,
      nickname: newName,
    }));
  };

  return (
    <section className="flex flex-col items-center justify-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">Profile</p>
      <article className="flex flex-row w-full px-100 items-center gap-80">
        <div className="flex flex-col items-center gap-10">
          <FileThumbnails
            file={file}
            defaultImage="/images/profile.jpeg"
            currentImage={profile}
            deleteFileHandler={() => setFile(null)}
          />
          <FileEdit onFileSelect={handleFileChange} />
        </div>
        <div className="flex flex-col">
          <p className="text-[#747373]">Name</p>
          <Input
            id="name"
            type="text"
            value={name}
            onValueChange={handleNameChange}
            className="border border-primary/70 p-10 rounded-md w-250 h-30"
          />
        </div>
      </article>
    </section>
  );
}
