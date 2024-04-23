'use client';

import { useState, useEffect } from 'react';
import { getProfileImageById } from '@/app/lib/dummyData';
import FileEdit from '../FileEdit';
import FileThumbnails from '../FileEdit/FileThumbnails';

export default function Profile({ id }: { id: number }) {
  const [profile, setProfile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const defaultProfileUrl = getProfileImageById(id);
    if (defaultProfileUrl) {
      fetch(defaultProfileUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const defaultProfileFile = new File([blob], 'profile.png', {
            type: 'image/png',
          });
          setProfile(defaultProfileFile);
        })
        .catch((error) => {
          console.error('Error fetching profile image:', error);
        });
    }
  }, [id]);
  return (
    <section className="flex flex-col items-center justify-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">profile</p>
      <article className="flex flex-row w-full px-100 items-center gap-80">
        <div className="flex flex-col items-center gap-10">
          <FileThumbnails
            file={profile}
            deleteFileHandler={() => setProfile(null)}
          />
          <FileEdit setFile={setProfile} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-[#747373]">
            name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            className="border border-primary/70 p-10 rounded-md w-250 h-30"
          />
        </div>
      </article>
    </section>
  );
}
