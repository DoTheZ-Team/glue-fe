import UserIcon from './UserIcon';

interface ProfileCardProps {
  name: string;
  title: string;
  profile?: string;
}

export default function ProfileCard({
  name,
  title,
  profile,
}: ProfileCardProps) {
  return (
    <article className="flex flex-row gap-10 items-end m-3">
      <UserIcon src={profile} />
      <div className="flex flex-col">
        <div className="text-[13px] text-[#626161]">{name}</div>
        <div className="text-[15px] leading-[14px]">{title}</div>
      </div>
    </article>
  );
}
