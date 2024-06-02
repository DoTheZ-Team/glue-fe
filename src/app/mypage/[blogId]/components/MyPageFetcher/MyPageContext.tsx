'use client';

import { generateContext } from '@/react-utils';
import { useState } from 'react';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { MyPageResponse } from './types';
import { usePatchMyPage, useUploadImage } from './queries';

interface MyPageContextProps {
  myPageData: MyPageResponse;
  setMyPageData: React.Dispatch<React.SetStateAction<MyPageResponse>>;
  handleImageUpload: (
    file: File,
    type: 'profile' | 'background',
  ) => Promise<void>;
  handleSave: () => Promise<void>;
}

const [MyPageProvider, useMyPageContext] = generateContext<MyPageContextProps>({
  name: 'mypage-info',
});

export function MyPageProviderWrapper({
  children,
  initialData,
  blogId,
}: {
  children: React.ReactNode;
  initialData: MyPageResponse;
  blogId: number;
}) {
  const [myPageData, setMyPageData] = useState<MyPageResponse>(initialData);
  const uploadImageMutation = useUploadImage();
  const patchMyPageMutation = usePatchMyPage(blogId);
  const { handleError } = useToastContext()!;

  const handleImageUpload = async (
    file: File,
    type: 'profile' | 'background',
  ) => {
    try {
      const { result } = await uploadImageMutation.mutateAsync(file);
      const { imageUrl } = result;
      setMyPageData((prevData) => ({
        ...prevData,
        [type]: imageUrl,
      }));
    } catch (error) {
      handleError('Error uploading image');
    }
  };

  const handleSave = async () => {
    try {
      await patchMyPageMutation.mutateAsync({ data: myPageData });
    } catch (error) {
      handleError('Error uploading image');
    }
  };

  const contextValue = {
    myPageData,
    setMyPageData,
    handleImageUpload,
    handleSave,
  };

  return <MyPageProvider {...contextValue}>{children}</MyPageProvider>;
}

export { useMyPageContext };
