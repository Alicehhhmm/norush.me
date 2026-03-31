'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { BlogHeader } from '@/components/blog-chat';
import { BlogGridCard } from '@/components/blog-chat/blog-grid-card';
import { BlogPostCard } from '@/components/blog-chat/blog-post-card';
import { MobileSelect } from '@/components/common/mobile-select';
import { useSidebarStore, useGlobClientContext } from '@/hooks';
import { useIsMobile } from '@/hooks/use-mobile';

import type { SelectOption } from '@/components/common/mobile-select';
import type { BlogPostsRSC, LinkTab } from '@/types/blog';
import type { FC } from 'react';

type BlogListProps = {
  data: BlogPostsRSC;
  categories: Array<LinkTab>;
};

export const BlogList: FC<BlogListProps> = ({ data, categories }) => {
  const { posts, category } = data;
  const t = useTranslations();

  const { frontmatter, pathname } = useGlobClientContext();

  const isMobile = useIsMobile();

  const categoryOptions: Array<SelectOption> = categories.map(category => ({
    value: category.key,
    label: category.label,
    link: category.link,
  }));

  const [selectedKey, setSelectedKey] = useState<string>(category || 'default');

  const handleTabChange = (key: string) => {
    setSelectedKey(key);
  };

  const { postLayout, togglePostLayout } = useSidebarStore();

  return (
    <div className="flex flex-col gap-4">
      <BlogHeader
        cover=""
        title={t(`layouts.blog.title`)}
        description={t('layouts.blog.desc')}
      />

      {isMobile && (
        <div className="hidden max-sm:block">
          <MobileSelect
            options={categoryOptions}
            value={selectedKey}
            onValueChange={handleTabChange}
            placeholder="选择分类"
            triggerClassName="h-10 px-3 py-2"
          />
        </div>
      )}

      {postLayout?.includes('grid') && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 md:gap-8">
          {posts.map(post => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              author={post.author}
              category={post.categories[2]}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      )}

      {postLayout?.includes('list') && (
        <div className="space-y-3 sm:space-y-4">
          {posts.map(post => (
            <BlogGridCard key={post.slug} post={post} />
          ))}
        </div>
      )}
      {/* TODO: 分页组件 */}
    </div>
  );
};
