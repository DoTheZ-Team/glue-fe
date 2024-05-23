import Story from '@/components/Story';
import Image from 'next/image';
import ProfileCard from '../ProfileCard';

interface FeedBoxProps {
  title: string;
  preview: string;
  photo: string;
  blogItem: {
    blogId: number;
    nickname: string;
    title: string;
    profile: string;
  };
}

export default function FeedBox({
  title,
  preview,
  photo,
  blogItem,
}: FeedBoxProps) {
  return (
    <div className="w-300 p-20 border border-[#b4b3b3] rounded-5">
      <ProfileCard
        name={blogItem.nickname}
        title={blogItem.title}
        profile={blogItem.profile}
      />
      <div className="relative w-250 h-170 p-30 mt-10 border border-[#bcbcbc] rounded-4">
        <Image src={photo} alt="image" layout="fill" objectFit="cover" />
      </div>
      <div className="px-5 pt-3">
        <Story title={title} content={preview} />
      </div>
    </div>
  );
}
