import { users } from '@/app/lib/dummyData';
import BlogCard from './BlogCard';

export default function BlogList({
  option,
}: {
  option: 'default' | 'onlyBlog';
}) {
  return (
    <div className="mt-30">
      {option === 'default' ? (
        <div className="flex flex-row gap-60 justify-center">
          {users.slice(0, 3).map((user) => (
            <BlogCard key={user.id} id={user.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-x-60 gap-y-30 justify-center">
          {users.map((user) => (
            <BlogCard key={user.id} id={user.id} />
          ))}
        </div>
      )}
    </div>
  );
}
