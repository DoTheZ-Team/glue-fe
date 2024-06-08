'use client';

import { generateContext } from '@/react-utils';
import { useState } from 'react';

interface BlogContextProps {
  loginId: number | null;
  setLoginId: (id: number | null) => void;
}

const [UserProvider, useUserContext] = generateContext<BlogContextProps>({
  name: 'user-info',
});

export function UserProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loginId, setLoginId] = useState<number | null>(null);

  const contextValue = {
    loginId,
    setLoginId,
  };

  return <UserProvider {...contextValue}>{children}</UserProvider>;
}

export { useUserContext };
