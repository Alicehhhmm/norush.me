'use strict';

import MDXCodeBox from '#site/components/MDX/MdxCodeBox';
import { Link } from '@/components/common';
import { Button } from '@/components/ui/button';

/**
 * 所有MDX中需要的客户端组件列表
 *
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const clientMdxComponents = {
  Button,
};

/**
 * 所有 HTML 元素需要映射到对应 React 组件的列表
 *
 * @type {import('mdx/types').MDXComponents}
 */
export const htmlComponents = {
  a: Link,
  pre: MDXCodeBox,
};
