'use client';
import { signOut } from 'next-auth/react';
import { Button } from './components/button/button';
import { AuthGuard } from '../guards/auth-guard';

export default function Index() {
  return (
    <AuthGuard>
      <></>
    </AuthGuard>
  );
}
