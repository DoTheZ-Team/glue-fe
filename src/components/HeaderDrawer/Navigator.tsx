'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/utils';

export default function Navigator() {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        label: '마이페이지',
        isActive: pathname === '/mypage',
        href: '/mypage',
      },
      {
        label: '나의 구독',
        isActive: pathname === '/mypage',
        href: '/mypage',
      },
      {
        label: '블로그 추천',
        isActive: pathname === '/mypage',
        href: '/mypage',
      },
      {
        label: '로그아웃',
        isActive: false,
        href: '/',
      },
    ];
  }, [pathname]);
  return (
    <div>
      <section className="p-4">
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href}>
              <div
                className={cn(
                  'text-[16px] hover:bg-neutral-700 rounded-lg p-2 pb-30',
                  route.isActive && 'bg-primary/50',
                )}
              >
                {route.label}
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
