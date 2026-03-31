import { Calendar, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

import { Link } from '@/components/common';
import ArticleCover from '@/components/common/ArticleCover';
import { formatDate } from '@/lib/date';

import type { ArticleColumn } from '@/types/blog';

type BlogPostCardProps = ArticleColumn;

export const BlogPostCardRow = ({
  title,
  category,
  description,
  author,
  date,
  slug,
  viewCount = 0,
  commentCount = 0,
  coverImage,
}: BlogPostCardProps) => {
  const handleEditor = () => {
    toast('未开放', {
      description: 'Go to github to edit this page',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    });
  };
  return (
    <article className="group relative w-full overflow-hidden rounded-lg bg-white shadow-xs transition-shadow duration-200 hover:shadow-md dark:bg-neutral-900/40">
      <div className="flex h-full flex-col px-3 sm:flex-row sm:space-x-4 sm:px-4">
        <Link
          href={slug}
          className="relative my-3 h-32 w-full shrink-0 sm:my-4 sm:h-36 sm:w-48"
        >
          {!coverImage ? (
            <Image
              fill
              unoptimized
              src={coverImage || '/placeholder.svg'}
              alt={title}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="size-full rounded-lg object-cover"
            />
          ) : (
            <ArticleCover
              title=""
              type="default"
              className="size-full rounded-lg object-cover"
            />
          )}
        </Link>
        <div className="flex flex-1 flex-col py-2 sm:py-4">
          <div className="flex items-start justify-between">
            <Link href={slug}>
              <h3 className="dark:text-muted-foreground mb-1 line-clamp-1 text-base font-medium text-gray-900 hover:text-lime-500 hover:underline sm:text-lg dark:hover:text-lime-400">
                {title}
              </h3>
            </Link>
            {/* TODO: Go to github to edit this page*/}
            <button
              onClick={handleEditor}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              <MoreVertical size={16} className="sm:size-18" />
            </button>
          </div>

          <p className="dark:text-foreground/40 mb-2 line-clamp-2 text-xs text-gray-600 sm:text-sm">
            {description}
          </p>

          <div className="dark:text-foreground/30 mt-auto flex flex-wrap items-center gap-3 text-xs text-gray-500 sm:gap-6">
            <div className="flex items-center">
              <Calendar size={12} className="mr-1 max-sm:size-3" />
              <span>{date ? formatDate(date) : ''}</span>
            </div>

            <div className="flex items-center">
              <span className="mr-1">文章数</span>
              <span>{viewCount}</span>
            </div>

            <div className="flex items-center">
              <span className="mr-1">订阅人数</span>
              <span>{commentCount}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
