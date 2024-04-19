import React from 'react';
import HamburgerMenu from '@/components/Common/Icons/HamburgerMenu';

export default function StoryBox() {
  return (
    <section className="p-100">
      <header className="flex flex-row justify-between w-full">
        <div className="font-extrabold text-4xl">Stories</div>
        <HamburgerMenu />
      </header>

      <article>title</article>
    </section>
  );
}
