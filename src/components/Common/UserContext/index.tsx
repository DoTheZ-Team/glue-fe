'use client';

import { useMemo, useState } from 'react';
import { generateContext } from '@/react-utils';

interface UserContextProps {
  loginId: number | null;
  setLoginId: (id: number | null) => void;
}

export const [UserProvider, useUserContext] = generateContext<UserContextProps>(
  {
    name: 'user-info',
  },
);

export function UserProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loginId, setLoginId] = useState<number | null>(null);

  const contextValue = useMemo(
    () => ({
      loginId,
      setLoginId,
    }),
    [loginId, setLoginId],
  );

  return <UserProvider {...contextValue}>{children}</UserProvider>;
}
