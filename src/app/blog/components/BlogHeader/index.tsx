import React from 'react';
import { NavigationIcons } from '@/components/Common';

export default function BlogHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = ' do the best Zl금 ';

  return (
    <div>
      <header className="w-full">
        <nav className="flex flex-row h-60 items-center justify-between p-10 px-20 bg-opacity-50 bg-[#c5c5c0]">
          <div className="text-xl px-10">{title}</div>
          <NavigationIcons />
        </nav>
      </header>
      {children}
    </div>
  );
}
