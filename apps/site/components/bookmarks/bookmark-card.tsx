'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Link2Icon } from 'lucide-react';

import type { BookmarkItemType } from '@/types';
import { Link } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';

interface BookmarkCardProps {
  item: BookmarkItemType;
  className?: string;
}

export const BookmarkCard: FC<BookmarkCardProps> = ({
  item,
  className = '',
}) => {
  const { link, domain, cover, title } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: '0 10px 30px rgba(var(--primary-rgb), 0.2)',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.25,
      }}
      className={`h-full ${className}`}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <Card className="relative h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:shadow-md">
          <div className="relative aspect-1200/630 h-44 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={cover ? cover : '/placeholder.svg'}
              alt={title}
              width={1200}
              height={630}
              className="animate-reveal aspect-1200/630 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              onError={e => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          </div>

          <CardContent className="flex flex-col justify-between gap-1 p-4">
            <h2 className="text-sm leading-snug text-gray-900 transition-colors duration-200 group-hover:text-gray-800">
              <span className="line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
                {title}
              </span>
            </h2>
            <div className="line-clamp-4 inline-flex items-center gap-1 text-xs text-gray-500">
              <span className="max-w-[200px] truncate">{domain ?? link}</span>
              <Link2Icon
                size={12}
                className="shrink-0 text-xs text-gray-400 transition-colors group-hover:text-lime-400"
              />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
