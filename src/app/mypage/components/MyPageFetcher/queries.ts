import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { postImage } from '@/api';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import Cookies from 'js-cookie';
import { BLOG_ID } from '@/constants';
import { getMyPageInfo, patchMyPageInfo } from './api';
import { MyPageResponse } from './types';

export const useMyPageInfo = () => {
  const blogId = Cookies.get(BLOG_ID) as string;

  return useSuspenseQuery({
    queryKey: ['mypage-info', blogId],
    queryFn: () => getMyPageInfo(Number(blogId)),
    select: (data) => data.result,
  });
};

export const usePostImage = () =>
  useMutation({
    mutationKey: ['upload-image'],
    mutationFn: (file: File) => postImage(file),
    onSuccess: (data) => {
      const { imageUrl } = data.result;
      return imageUrl;
    },
  });

export const usePatchMyPage = () => {
  const { handleSuccess } = useToastContext();
  const blogId = Cookies.get(BLOG_ID) as string;

  return useMutation({
    mutationKey: ['patch-mypage', blogId],
    mutationFn: ({ data }: { data: Partial<MyPageResponse> }) =>
      patchMyPageInfo(Number(blogId), data),
    onSuccess: () => {
      handleSuccess('updated !');
    },
  });
};
