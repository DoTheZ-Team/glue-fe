'use client';

import { Input } from '@/components/Common';
import { useState, ChangeEvent } from 'react';

export default function BlogName() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <section className="flex flex-col items-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">blog-info</p>
      <article className="flex flex-col">
        <p className="text-[#747373]">Title</p>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          maxLength={15}
          className="border border-primary/70 p-10 rounded-md w-400 h-30"
        />
        <p className="text-[#747373] mt-30">Description</p>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          maxLength={120}
          className="border border-primary/70 p-10 rounded-md w-400 h-120"
        />
      </article>
    </section>
  );
}
