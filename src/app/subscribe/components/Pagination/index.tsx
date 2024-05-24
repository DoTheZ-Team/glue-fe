import { cn } from '@/utils';
import { Button } from '@/components/Common';

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function Pagination({
  currentPage,
  onPageChange,
  isFirst,
  isLast,
}: Props) {
  return (
    <div
      className={cn(
        'flex justify-center items-center mt-25 text-[#3e3e3e] text-10',
        { invisible: isFirst && isLast },
      )}
    >
      <ul className="flex flex-row items-center">
        <li className={cn('relative', { invisible: currentPage === 0 })}>
          <Button
            onClick={() => onPageChange(currentPage - 1)}
            className="text-center bg-white"
          >
            <span className="">&lt;</span>
          </Button>
        </li>
        <li key={currentPage} className="mx-15">
          <span className="">{currentPage + 1}</span>
        </li>
        <li className={cn('relative', { invisible: !isLast })}>
          <Button
            onClick={() => onPageChange(currentPage + 1)}
            className="text-center bg-white"
          >
            <span className="">&gt;</span>
          </Button>
        </li>
      </ul>
    </div>
  );
}
