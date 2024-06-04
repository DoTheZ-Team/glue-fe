import { generateContext } from '@/react-utils';
import { MyPageResponse } from '../types';

interface MyPageContextProps {
  myPageData: MyPageResponse;
  setMyPageData: React.Dispatch<React.SetStateAction<MyPageResponse>>;
  handleImageUpload: (
    file: File,
    type: 'profile' | 'background',
  ) => Promise<void>;
  handleSave: () => Promise<void>;
}

export const [MyPageProvider, useMyPageContext] =
  generateContext<MyPageContextProps>({
    name: 'mypage-info',
  });
