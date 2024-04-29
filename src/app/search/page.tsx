'use client';

import { useState } from 'react';
import { Button } from '@/components/Common';
import { SearchBox } from './components';
import ContentList from './components/ContentList';
import BlogList from './components/BlogList';

type View = 'default' | 'onlyBlog' | 'onlyContent';

export default function Page() {
  const [filter, setFilter] = useState<View>('default');

  const handleButtonClick = (value: View) => {
    setFilter((prevFilter) => (prevFilter === value ? 'default' : value));
  };

  return (
    <main className="px-200">
      <SearchBox />
      <div className="flex flex-row justify-end px-100 gap-10">
        <Button
          className="bg-transparent"
          onClick={() => handleButtonClick('onlyBlog')}
        >
          블로그 보기
        </Button>
        <Button
          className="bg-transparent"
          onClick={() => handleButtonClick('onlyContent')}
        >
          게시글 보기
        </Button>
      </div>
      <div className="pt-20">
        {filter === 'default' && (
          <div className="flex flex-col gap-100 items-center">
            <BlogList option={filter} />
            <div className="w-full h-1 bg-primary" />
            <ContentList />
          </div>
        )}
        {filter === 'onlyBlog' && <BlogList option={filter} />}
        {filter === 'onlyContent' && <ContentList />}
      </div>
    </main>
  );
}
