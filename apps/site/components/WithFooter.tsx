'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { FooterSimple } from '@/components/common';
import { Link } from '@/components/common';
import { siteNavigation } from '@/config/next.json.mjs';

import type { FC } from 'react';

const WithFooter: FC = () => {
  const t = useTranslations();
  const pathname = usePathname()!;

  const { socialLinks } = siteNavigation;

  const updatedSocialLinks = socialLinks.map((link: any) => ({
    ...link,
    text: t(link.name),
  }));

  const navigation = { socialLinks: updatedSocialLinks, footerLinks: [] };

  return <FooterSimple navigation={navigation} as={Link} pathname={pathname} />;
};

export default WithFooter;
