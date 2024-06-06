'use client';

import { Input, Search } from '@/components/Common';
import { useSearch } from '@/hooks';

export default function SearchBox() {
  const { searchQuery, handleInputChange, handleKeyDown } = useSearch();

  return (
    <article className="flex justify-center py-30">
      <div
        className="h-42 w-480 flex flex-row items-center justify-between
            rounded-2xl gap-15 p-10 border"
      >
        <Input
          className="h-full w-full bg-transparent"
          placeholder="Search blog or contents"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Search />
      </div>
    </article>
  );
}
