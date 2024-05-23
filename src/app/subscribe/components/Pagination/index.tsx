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
        'flex justify-center items-center mt-8 text-[#3e3e3e] text-10',
        { invisible: isFirst && isLast },
      )}
    >
      <ul className="flex list-none">
        <li className={cn('relative mx-2', { invisible: currentPage === 1 })}>
          <Button
            onClick={() => onPageChange(currentPage - 1)}
            className="block w-12 text-center bg-white"
          >
            <span className="absolute left-0">&lt;</span>
          </Button>
        </li>
        <li key={currentPage} className="mx-1">
          <span className="block w-6 h-6 leading-6 text-center rounded-full cursor-pointer">
            {currentPage + 1}
          </span>
        </li>
        <li className={cn('relative mx-2', { invisible: isLast })}>
          <Button
            onClick={() => onPageChange(currentPage + 1)}
            className="block w-12 text-center bg-white"
          >
            <span className="absolute right-0">&gt;</span>
          </Button>
        </li>
      </ul>
    </div>
  );
}
