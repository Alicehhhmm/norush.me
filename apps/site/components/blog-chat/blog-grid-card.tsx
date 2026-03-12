import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { Link } from '@/components/common';

import type { ExtendedType } from '@/types/blog';
import { formatDate } from '@/lib/date';

export function BlogGridCard({ post }: { post: ExtendedType }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xs transition-shadow duration-200 hover:shadow-md dark:bg-neutral-900/40">
      <div className="relative h-48 sm:h-56 md:h-64">
        <Link href={`${post.slug}`}>
          <Image
            fill
            unoptimized
            src={post.coverImage || '/placeholder.svg'}
            alt={post.title}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <Link
          href={`${post.slug}`}
          className="dark:text-muted-foreground mb-2 text-lg font-semibold text-gray-900 hover:underline sm:text-xl"
        >
          {post.title}
        </Link>
        <p className="dark:text-muted-foreground/80 line-clamp-3 flex-1 text-sm text-gray-600 sm:text-base">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          {post.date && (
            <div className="flex items-center gap-1 text-xs text-gray-600 sm:text-sm dark:text-gray-500">
              <Calendar className="mr-1 h-3 w-3 shrink-0 text-gray-600 sm:mr-1.5 sm:h-4 sm:w-4 dark:text-gray-500" />
              <time>{formatDate(post.date)}</time>
            </div>
          )}
          <Link
            href={`${post.slug}`}
            className="text-sm text-lime-600 hover:underline sm:text-base dark:text-lime-500"
          >
            阅读更多
          </Link>
        </div>
      </div>
    </div>
  );
}
