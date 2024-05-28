import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { getMyPageInfo, patchMyPageInfo } from './api';
import { MyPageResponse } from './types';

export const useMyPageInfo = (blogId: number) =>
  useSuspenseQuery({
    queryKey: ['mypage-info'],
    queryFn: () => getMyPageInfo(blogId),
    select: (data) => data.result,
  });

export const usePatchMyPage = (blogId: number) => {
  const { handleSuccess } = useToastContext()!;
  useMutation({
    mutationKey: [],
    mutationFn: ({ data }: { data: Partial<MyPageResponse> }) =>
      patchMyPageInfo(blogId, data),

    onSuccess: () => {
      handleSuccess('updated !');
    },
  });
};
