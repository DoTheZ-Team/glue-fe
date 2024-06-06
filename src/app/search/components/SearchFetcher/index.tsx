import { ReactNode } from 'react';
import { SearchResultProvider } from './SearchContext';
import { useSearchResult } from './quries';

interface SearchResultFetcherProps {
  children: ReactNode;
  page: number;
  size: number;
  keyword: string;
}

export function SearchResultFetcher({
  children,
  page,
  size,
  keyword,
}: SearchResultFetcherProps) {
  const { data } = useSearchResult(page, size, keyword);

  return <SearchResultProvider {...data}>{children}</SearchResultProvider>;
}
