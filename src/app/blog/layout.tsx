import type { Metadata } from 'next';

import BlogHeader from './components/BlogHeader';

export const metadata: Metadata = {
  title: '글 작성',
  description: 'Glue, The Blog Playground!',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BlogHeader>{children}</BlogHeader>;
    </div>
  );
}
