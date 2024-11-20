'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface UnAuthGuardProps extends PropsWithChildren {}
export const UnAuthGuard = ({ children }: UnAuthGuardProps) => {
  const { status } = useSession();

  if (status === 'loading') return <></>;

  if (status === 'authenticated') redirect('/');

  return children;
};
