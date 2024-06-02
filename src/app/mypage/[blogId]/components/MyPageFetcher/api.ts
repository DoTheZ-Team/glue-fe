import { http } from '@/api';
import { MyPageResponse } from './types';

export const getMyPageInfo = (blogId: number) =>
  http.get<MyPageResponse>({
    url: `/blogs/mypage/${blogId}`,
    params: { blogId },
  });

export const uploadImage = (file: File) => {
  const formData = new FormData();
  formData.append('multipartFile', file);

  return http.post<{ imageUrl: string }>({
    url: '/blogs/images',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const patchMyPageInfo = (
  blogId: number,
  data: Partial<MyPageResponse>,
) =>
  http.patch<MyPageResponse>({
    url: `/blogs/mypage/${blogId}`,
    data,
  });
