'use client';
import { Button } from 'apps/friender/components/button/button';
import { UnAuthGuard } from 'apps/friender/guards/unauth-guard';
import { signIn } from 'next-auth/react';

interface LoginPageProps {}

export default function (props: LoginPageProps) {
  return (
    <UnAuthGuard>
      <>Login Page</>

      <Button onClick={() => signIn('google')}>Login</Button>
    </UnAuthGuard>
  );
}
