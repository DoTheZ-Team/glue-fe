'use client';

import { generateContext } from '@/react-utils';
import { MyPageResponse } from './types';

export const [MyPageProvider, useMyPageContext] =
  generateContext<MyPageResponse>({
    name: 'mypage-info',
  });
