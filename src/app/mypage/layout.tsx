import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav, NavigationIcons, useUserContext } from '@/components/Common';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import { useRouter } from 'next/navigation';
import MyPageFallback from './components/MyPageFallback';
import MyPageFetcher from './components/MyPageFetcher';

export const metadata: Metadata = {
  title: 'glue - mypage',
  description: 'glue - mypage',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const { loginId } = useUserContext();
  const { push } = useRouter();
  if (loginId === null) push('/login');

  return (
    <main>
      <Nav className="flex justify-between px-30 pt-30">
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>
        <NavigationIcons />
      </Nav>
      <AsyncBoundaryWithQuery pendingFallback={<div>loading 중..</div>}>
        <MyPageFallback>
          {loginId !== null ? (
            <MyPageFetcher blogId={loginId}>{children}</MyPageFetcher>
          ) : (
            <div>Login ID is not available.</div>
          )}
        </MyPageFallback>
      </AsyncBoundaryWithQuery>
    </main>
  );
}
