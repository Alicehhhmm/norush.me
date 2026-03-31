'use client';

import { useTranslations } from 'next-intl';

import Breadcrumbs, {
  type BreadcrumbLinks,
} from '@/components/common/Breadcrumbs';
import { useSidebarStore } from '@/hooks';

import type { NavigationKeys } from '@/types';
import type { FC } from 'react';

type WithBreadcrumbsProps = {
  navKeys?: Array<NavigationKeys>;
};

export const WithBreadcrumbs: FC<WithBreadcrumbsProps> = ({ navKeys = [] }) => {
  const t = useTranslations();
  const { breadcrumbLinks } = useSidebarStore();

  let maxLength = 5;
  let links: Array<BreadcrumbLinks> = [];

  if (navKeys.includes('blog')) {
    links = breadcrumbLinks;
    maxLength = 4;
  }

  return (
    <Breadcrumbs
      links={links}
      maxLength={maxLength}
      homeLinkAriaLabel={t('components.common.breadcrumbs.navigateToHome')}
    />
  );
};

export default WithBreadcrumbs;
