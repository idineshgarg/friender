'use client';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

interface ProviderProps extends PropsWithChildren {}

export const Provider = ({ children }: ProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
