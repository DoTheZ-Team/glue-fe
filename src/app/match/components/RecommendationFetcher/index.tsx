'use client';

import { StrictPropsWithChildren } from '@/types';
import { RecommendationProvider } from './RecommendationContext';
import { useRecommendation } from './quries';

export default function MatchingFetcher({ children }: StrictPropsWithChildren) {
  const { data } = useRecommendation();

  return <RecommendationProvider {...data}>{children}</RecommendationProvider>;
}
