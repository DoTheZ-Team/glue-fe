'use client';

import { StrictPropsWithChildren } from '@/types';
import { useFollowList, useFollowPost } from './quries';
import { FollowListProvider, FollowPostProvider } from './SubscriptionContext';

export function FollowListFetcher({
  children,
  page,
}: StrictPropsWithChildren & { page: number }) {
  const { data } = useFollowList(page);

  return <FollowListProvider {...data}>{children}</FollowListProvider>;
}

export function FollowPostFetcher({
  children,
  page,
}: StrictPropsWithChildren & { page: number }) {
  const { data } = useFollowPost(page);

  return <FollowPostProvider {...data}>{children}</FollowPostProvider>;
}
