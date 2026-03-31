import { Link as LocalizedLink } from '@/i18n/routing';

import type { FC, ComponentProps } from 'react';

type LinkProps = Omit<ComponentProps<typeof LocalizedLink>, 'href'> & {
  href?: string;
};

const Link: FC<LinkProps> = ({ children, href, ...props }) => {
  if (!href || href.toString().startsWith('http')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <LocalizedLink href={href?.toString()} {...props}>
      {children}
    </LocalizedLink>
  );
};

export default Link;
