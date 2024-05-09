import type { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import { ToastProvider } from '@/components/Common';
import { GlobalErrorBoundary } from '@/react-utils/ErrorBoundary';
import { luckiestGuy, pretendard } from './fonts';
import '../styles/globals.css';
import QueryProviders from './lib/QueryProvider';

export const metadata: Metadata = {
  title: 'Glue',
  description: 'Glue, The Blog Playground!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${luckiestGuy.variable} ${pretendard.variable}`}>
        <GlobalErrorBoundary
          renderFallback={() => <div>로딩이 발생했어요 !</div>}
        >
          <Suspense fallback={<div>로딩 중입니다...</div>}>
            <QueryProviders>
              <ToastProvider>{children}</ToastProvider>
            </QueryProviders>
          </Suspense>
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
