'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface AuthGuardProps extends PropsWithChildren {}
export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { status } = useSession();

  if (status === 'loading') return <></>;

  if (status === 'unauthenticated') redirect('/login');

  return children;
};
