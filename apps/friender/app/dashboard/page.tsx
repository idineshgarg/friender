'use client';
import { Button } from '@app/apps/friender/app/components/button/button';
import { signOut } from 'next-auth/react';

export default function Dashboard() {
  return (
    <>
      <div>Home page</div>
      <Button onClick={() => signOut()}>Signout</Button>
    </>
  );
}
