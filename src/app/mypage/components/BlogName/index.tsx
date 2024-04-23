'use client';

import { useState } from 'react';

export default function BlogName() {
  const [blogName, setblogName] = useState('');
  const handleNameChange = (e) => {
    setblogName(e.target.value);
  };
  return (
    <section className="flex flex-col items-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">blog-info</p>
      <article className="flex flex-col">
        <label htmlFor="name" className="text-[#747373]">
          Title
        </label>
        <input
          type="text"
          id="name"
          value={blogName}
          onChange={handleNameChange}
          className="border border-primary/70 p-10 rounded-md w-400 h-30"
        />
        <label htmlFor="name" className="text-[#747373] mt-30">
          Description
        </label>
        <input
          type="text"
          id="name"
          value={blogName}
          onChange={handleNameChange}
          className="border border-primary/70 p-10 rounded-md w-400 h-200"
        />
      </article>
    </section>
  );
}
