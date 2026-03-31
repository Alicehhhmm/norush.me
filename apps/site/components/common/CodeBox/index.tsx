'use client';

import { BaseCodeBox } from '@nw/ui/mdx';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';

import type { FC, PropsWithChildren } from 'react';

type CodeBoxProps = {
  language: string;
  className?: string;
};

const CodeBox: FC<PropsWithChildren<CodeBoxProps>> = ({
  language,
  className,
  ...restProps
}) => {
  const t = useTranslations();

  return (
    <BaseCodeBox
      language={language}
      className={cn(className, 'code-box')}
      copyButtonLabel={t('components.common.codebox.copy')}
      copiedButtonLabel={t('components.common.codebox.copied')}
      {...restProps}
    />
  );
};

export default CodeBox;
