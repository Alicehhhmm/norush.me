import { User, Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/common';
import ArticleCover from '@/components/common/ArticleCover';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/date';
import { cn } from '@/lib/utils';

import type { BlogCategory } from '@/types/blog';

type BlogPostCardProps = {
  title: string;
  category: BlogCategory;
  description?: string;
  author?: string;
  date?: Date;
  slug?: string;
};

export const BlogPostCard = ({
  title,
  category,
  description,
  author,
  date,
  slug,
}: BlogPostCardProps) => {
  const t = useTranslations();

  return (
    <article className="group relative flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-xs transition-shadow duration-200 hover:shadow-md dark:bg-neutral-900/40">
      <Link href={slug} className="m-0 w-full cursor-pointer overflow-hidden">
        <ArticleCover
          title={title}
          type={category}
          className="rounded-tl-lg rounded-tr-lg"
        />
      </Link>

      <div className="flex flex-1 flex-col space-y-3 p-4">
        {category && (
          <Badge
            className={cn(
              'w-fit px-3 py-1 text-xs font-semibold tracking-wider uppercase',
              'cursor-pointer rounded-md text-lime-500',
              'transition-colors hover:bg-lime-100 dark:bg-neutral-900/30'
            )}
          >
            {t(`layouts.blog.categories.${category}`)}
          </Badge>
        )}

        <Link
          href={slug}
          className={cn(
            'dark:text-foreground/60 text-xl leading-tight font-bold text-gray-900',
            'order-1 flex-1 transition-colors hover:text-lime-400 hover:underline'
          )}
        >
          {title}
        </Link>

        {description && (
          <p className="order-2 line-clamp-3 leading-relaxed text-gray-600">
            {description}
          </p>
        )}

        <footer className="order-3 flex flex-row items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-sm">
              <User className="h-4 w-4 shrink-0 text-gray-400" />
              <span className="dark:text-foreground/50 px-2.5 py-1 text-gray-600">
                {author ?? 'Untitled'}
              </span>
            </div>

            {/* 日期 */}
            {date && (
              <div className="dark:text-foreground/30 flex items-center gap-1 text-sm text-gray-400">
                <Calendar className="dark:text-foreground/30 mr-1.5 h-4 w-4 shrink-0 text-gray-400" />
                <time>{formatDate(date)}</time>
              </div>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
};
