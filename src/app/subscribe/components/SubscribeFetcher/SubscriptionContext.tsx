'use client';

import { generateContext } from '@/react-utils';
import {
  FollowListResponse,
  FollowerListResponse,
  FollowPostResponse,
} from './types';

export const [FollowListProvider, useFollowListContext] =
  generateContext<FollowListResponse>({
    name: 'follow-list',
  });

export const [FollowerListProvider, useFollowerListContext] =
  generateContext<FollowerListResponse>({
    name: 'follower-list',
  });

export const [FollowPostProvider, useFollowPostContext] =
  generateContext<FollowPostResponse>({
    name: 'follow-post',
  });
