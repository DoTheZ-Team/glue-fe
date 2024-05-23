import { http } from '@/api';
import {
  FollowListResponse,
  FollowerListResponse,
  FollowPostResponse,
} from './types';

export const getFollowList = (page: number) =>
  http.get<FollowListResponse>({
    url: '/blogs/subscriptions/follows',
    params: { page },
  });

export const getFollowerList = (page: number) =>
  http.get<FollowerListResponse>({
    url: '/blogs/subscriptions/followers',
    params: { page },
  });

export const getFollowPost = (page: number) =>
  http.get<FollowPostResponse>({
    url: '/blogs/subscriptions/follows/posts',
    params: { page },
  });
