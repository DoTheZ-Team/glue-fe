import React from 'react';
import {
  Tags,
  Albums,
  StoryBox,
  ProfileBox,
  BlogBackground,
} from './components';

export default function page() {
  return (
    <div className="relative w-full h-full">
      <BlogBackground />
      <section className="flex flex-row m-100 py-50">
        <ProfileBox />
        <StoryBox />
      </section>
      <section className="flex flex-row m-100">
        <Tags />
        <Albums />
      </section>
    </div>
  );
}
