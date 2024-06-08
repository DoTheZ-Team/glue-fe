import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';

export function useSearch() {
  const [showInput, setShowInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { push } = useRouter();

  const handleSearchClick = () => {
    setShowInput(!showInput);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery !== '') {
      push(`/search?query=${searchQuery}`);
    }
  };

  return {
    showInput,
    searchQuery,
    handleSearchClick,
    handleInputChange,
    handleKeyDown,
  };
}

export default useSearch;
