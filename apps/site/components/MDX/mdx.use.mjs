'use strict';

import { GlowingBackdrop } from '@nw/ui/common';

import {
  HeroSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
} from '@/components/home';
import { ResponsiveGrid } from '@/components/MDX/ResponsiveGrid';
import { Badge as WithBadge } from '@/components/ui/badge';

/**
 * 所有需要传递给MDX的React（HOC）组件的完整列表
 *
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const mdxComponents = {
  // HOC for providing Badge Data
  WithBadge,
  ResponsiveGrid,
  HeroSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
  GlowingBackdrop,
};
