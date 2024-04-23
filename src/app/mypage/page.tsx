import Profile from './components/profile';
import Title from './components/Title';
import Background from './components/Background';
import BlogName from './components/BlogName';

export default function Page() {
  return (
    <main>
      <Title />
      <section className="flex flex-col items-center py-400">
        <p className="h-1 w-500 bg-[#979696]" />
        <Profile id={1} />
        <p className="h-1 w-500 bg-[#979696]" />
        <BlogName />
        <p className="h-1 w-500 bg-[#979696]" />
        <Background id={1} />
      </section>
    </main>
  );
}
