'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { LangToggle } from '@/components/common/lang-toggle';
import { ThemeToggle } from '@/components/common/theme-toggle';
import { cn } from '@/lib/utils';
import { stripLangPrefixPath } from '@/utils/paths';

import type { MappedNavigationEntry } from '@/types/navigation';
import type { FC } from 'react';

type MobileNavProps = {
  navigationList: Array<MappedNavigationEntry & { key: string }>;
};

export const MobileNav: FC<MobileNavProps> = ({ navigationList }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>('/');

  const changeHidden = (hid: boolean) => {
    if (hid) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    if (pathname) {
      setActive(stripLangPrefixPath(pathname));
    }

    changeHidden(isOpen);
    return () => changeHidden(false);
  }, [isOpen]);

  return (
    <div className="flex items-center md:hidden">
      <button
        type="button"
        className="hover:bg-accent/50 relative h-10 w-10 rounded-lg"
        aria-label="移动端导航按钮"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {isOpen ? (
            <X className="h-5 w-5 transition-all duration-300 ease-out" />
          ) : (
            <Menu className="h-5 w-5 transition-all duration-300 ease-out" />
          )}
        </div>
      </button>

      {/* nav plen */}
      <div
        className={cn(
          'fixed inset-0 top-[60px] z-50 h-[calc(100vh-60px)]',
          'bg-background/95 shadow-lg backdrop-blur-lg',
          'transition-[transform,opacity] duration-300 ease-in-out',
          'dark:bg-background/90',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
        onClick={e => e.stopPropagation()}
        onTouchMove={e => e.preventDefault()}
      >
        <div className="flex h-full flex-col">
          <nav className="flex-1 space-y-1 overflow-y-auto p-4 sm:p-6">
            {navigationList.map(item => (
              <div
                key={item.key}
                className="border-border/20 border-b last:border-0"
              >
                <div
                  className={cn(
                    'flex items-center justify-between py-3',
                    'text-sm font-medium ',
                    'hover:bg-accent/5 active:bg-accent/10 active:text-lime-500',
                    '-mx-1 rounded-lg px-1.5 py-2',
                    'transition-colors duration-200 ease-out',
                    item.link === active &&
                      'bg-accent-foreground/10 text-lime-500'
                  )}
                >
                  <Link
                    href={item.link ?? '/'}
                    onClick={() => setActive(item.link ?? '/')}
                  >
                    <span className="tracking-tight">{item.label}</span>
                  </Link>
                </div>
              </div>
            ))}
          </nav>

          <div className="border-border/20 bg-accent/5 border-t p-4 pt-3 sm:p-6">
            <div className="mb-3 flex justify-center gap-3">
              <LangToggle />
              <ThemeToggle />
            </div>
            <p className="text-muted-foreground/80 text-center text-[0.8rem] leading-5">
              © {new Date().getFullYear()}Norush. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
