import Image from 'next/image';

interface BlogCardProps {
  photoUrl: string;
  title: string;
  description: string;
}

export default function BlogCard({
  photoUrl = '/tempImage/bg.jpeg',
  title,
  description,
}: BlogCardProps) {
  return (
    <article className="flex flex-col items-center justify-start border border-[#979696] rounded-2 shadow-sm">
      <div className="relative w-250 h-130 group">
        <Image
          src={photoUrl}
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-pretendard font-bold">
          {description}
        </div>
      </div>
      <p className="font-semibold p-4">{title}</p>
    </article>
  );
}
