import type { Metadata } from 'next';
import BlogHeader from './components/BlogHeader';

export const metadata: Metadata = {
  title: 'myblog',
  description: 'Glue - myblog',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BlogHeader>{children}</BlogHeader>
    </div>
  );
}
