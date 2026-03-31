import CodeBox from '@/components/common/CodeBox';
import { getLanguageDisplayName } from '@/utils/getLanguageDisplayName';

import type { FC, PropsWithChildren } from 'react';

type CodeBoxProps = { className?: string; showCopyButton?: string };

const MDXCodeBox: FC<PropsWithChildren<CodeBoxProps>> = ({
  children: code,
  className,
}) => {
  const matches = className?.match(/language-(?<language>[a-zA-Z]+)/);
  const language = matches?.groups?.language ?? '';

  return (
    <CodeBox language={getLanguageDisplayName(language)} className={className}>
      {code}
    </CodeBox>
  );
};

export default MDXCodeBox;
