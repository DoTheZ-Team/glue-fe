'use client';

import Link from 'next/link';
import { NavigationIcons } from '@/components/Common';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import SearchFallback from './components/SearchFallback';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-70">
      <nav className="flex justify-between px-30 pt-30">
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>
        <NavigationIcons />
      </nav>
      <AsyncBoundaryWithQuery>
        <SearchFallback>{children}</SearchFallback>
      </AsyncBoundaryWithQuery>
    </main>
  );
}
