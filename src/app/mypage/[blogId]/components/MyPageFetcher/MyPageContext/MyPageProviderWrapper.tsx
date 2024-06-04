'use client';

import { useState } from 'react';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { MyPageResponse } from '../types';
import { usePatchMyPage, usePostImage } from '../queries';
import { MyPageProvider } from './index';

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
  const uploadImageMutation = usePostImage();
  const patchMyPageMutation = usePatchMyPage(blogId);
  const { handleError } = useToastContext();

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
