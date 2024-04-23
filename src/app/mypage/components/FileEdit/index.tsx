'use client';

import { Button } from '@/components/Common';
import { useRef } from 'react';

interface ProfileEditProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function FileEdit({ setFile }: ProfileEditProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function selectFile(e: React.ChangeEvent<HTMLInputElement>) {
    const inputEl = e.target as HTMLInputElement;
    const selectedFile = inputEl.files && inputEl.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  return (
    <div className="">
      <input
        type="file"
        accept="image/*"
        id="profile"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={selectFile}
      />
      <Button
        onClick={() => inputRef.current?.click()}
        className="w-70 m-5 p-4 bg-primary/30 text-primary"
      >
        edit
      </Button>
    </div>
  );
}
