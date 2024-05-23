'use client';

import { StrictPropsWithChildren } from '@/types';
import { useFollowList, useFollowerList, useFollowPost } from './quries';
import {
  FollowListProvider,
  FollowerListProvider,
  FollowPostProvider,
} from './SubscriptionContext';

export function FollowListFetcher({
  children,
  page,
}: StrictPropsWithChildren & { page: number }) {
  const { data } = useFollowList(page);

  return <FollowListProvider {...data}>{children}</FollowListProvider>;
}

export function FollowerListFetcher({
  children,
  page,
}: StrictPropsWithChildren & { page: number }) {
  const { data } = useFollowerList(page);

  return <FollowerListProvider {...data}>{children}</FollowerListProvider>;
}

export function FollowPostFetcher({
  children,
  page,
}: StrictPropsWithChildren & { page: number }) {
  const { data } = useFollowPost(page);

  return <FollowPostProvider {...data}>{children}</FollowPostProvider>;
}
