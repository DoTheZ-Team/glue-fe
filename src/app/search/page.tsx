'use client';

import { useState } from 'react';
import { Button } from '@/components/Common';
import { SearchBox, ContentList, BlogList } from './components';

export default function Page() {
  const [viewContents, setViewContents] = useState(true);
  const buttonText = viewContents === true ? '블로그 보기' : '게시물 보기';

  const toggleView = () => {
    setViewContents((prev) => !prev);
  };

  return (
    <div className="px-200">
      <SearchBox />
      <div className="flex flex-row justify-end px-10">
        <Button
          className="bg-transparent text-primary font-semibold underline underline-offset-4"
          onClick={() => toggleView()}
        >
          {buttonText}
        </Button>
      </div>
      <div className="pt-20">
        {viewContents ? <ContentList /> : <BlogList />}
        <BlogList />
        <ContentList />
      </div>
    </div>
  );
}
