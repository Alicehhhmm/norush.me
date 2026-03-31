import { Link } from '@/components/common';
import { Logon } from '@/components/icons';

export const NavLogo = () => (
  <Link
    href="/"
    className="bg-fluo-logobg text-fluo-logo flex aspect-square size-8 items-center justify-center rounded-full "
  >
    <Logon />
  </Link>
);
