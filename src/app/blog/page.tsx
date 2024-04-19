import React from 'react';
import BlogBackground from './components/BlogBackground';
import ProfileBox from './components/ProfileBox';
import StoryBox from './components/StoryBox';

export default function page() {
  return (
    <div className="relative w-full h-full">
      <BlogBackground />
      <section className="flex flex-row m-100 items-center">
        <ProfileBox />
        <StoryBox />
      </section>
    </div>
  );
}
