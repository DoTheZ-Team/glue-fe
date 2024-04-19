import Link from 'next/link';
import Search from '../Icons/Search';
import Alaram from '../Icons/Alarm';
import HamburgerMenu from '../Icons/HamburgerMenu';

export default function NavigationIcons() {
  return (
    <div className="flex gap-12">
      <Link href="/search">
        <Search />
      </Link>

      {/* TODO: Alaram 연결 */}
      <Alaram />

      {/* TODO: HamburgerMenu 연결 */}
      <HamburgerMenu />
    </div>
  );
}
