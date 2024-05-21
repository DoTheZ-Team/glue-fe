import { http } from '@/api';
import { FollowListResponse, FollowPostResponse } from './types';

export const getFollowList = (page: number) =>
  http.get<FollowListResponse>({
    url: '/blogs/subscriptions/followers',
    params: { page },
  });

export const getFollowPost = (page: number) =>
  http.get<FollowPostResponse>({
    url: '/{blogs/subscriptions/followers/posts',
    params: { page },
  });
