import { Nav, NavigationIcons } from '@/components/Common';

export default function BlogHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = ' do the best Zl금 ';

  return (
    <div className="relative">
      <Nav className="relative h-60 bg-opacity-60 bg-[#bebebe] z-10">
        <div className="text-[20px] text-[#363636]">{title}</div>
        <NavigationIcons />
      </Nav>
      <div className="absolute top-0">{children}</div>
    </div>
  );
}
