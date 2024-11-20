import { UnAuthGuard } from 'apps/friender/guards/unauth-guard';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UnAuthGuard>{children}</UnAuthGuard>;
}
