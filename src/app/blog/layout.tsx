import type { Metadata } from 'next';
import { luckiestGuy, pretendard } from '/src/app/fonts';
import BlogHeader from './components/BlogHeader';

export const metadata: Metadata = {
  title: '글 작성',
  description: 'Glue, The Blog Playground!',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${luckiestGuy.variable} ${pretendard.variable}`}>
        <BlogHeader>{children}</BlogHeader>
      </body>
    </html>
  );
}
