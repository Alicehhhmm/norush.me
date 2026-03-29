'use client';

import type { FC, ReactElement, PropsWithChildren, ReactNode } from 'react';
import { Fragment, isValidElement, useRef } from 'react';
import { CopyIcon, CodeXmlIcon } from 'lucide-react';

import { Button } from '@nw/ui/general';
import { cn } from '#ui/utils';
import { useCopy } from '#ui/hooks';

import styles from './index.module.css';

/**
 * 将纯文本内容的代码元素转换为更结构化的格式，以便渲染行号
 *
 * @param {ReactNode} code - 需要转换的代码元素
 * @param {string} language - 代码语言
 * @returns {ReactNode} 转换后的代码元素
 */
const transformCode = (code: ReactNode, language: string): ReactNode => {
  // 如果传入的 `code` 不是有效的 React 元素，则直接返回
  if (!isValidElement(code)) {
    return code;
  }

  const content = (code.props as { children?: ReactNode })?.children;

  // 如果元素类型不是 `code` 或内容不是字符串，则直接返回
  if (code.type !== 'code' || typeof content !== 'string') {
    return code;
  }

  // 将代码内容按行分割
  // 注意：使用 `.split` 会在末尾生成一个空字符串，需要移除
  const lines = content.split('\n');

  const extraStyle = language.length === 0 ? { fontFamily: 'monospace' } : {};

  return (
    <code style={extraStyle}>
      {lines
        .flatMap((line, lineIndex) => {
          const columns = line.split(' ');

          return [
            <span key={lineIndex} className="line">
              {columns.map((column, columnIndex) => (
                <Fragment key={columnIndex}>
                  <span>{column}</span>
                  {columnIndex < columns.length - 1 && <span> </span>}
                </Fragment>
              ))}
            </span>,
            '\n',
          ];
        })
        .slice(0, -2)}
    </code>
  );
};

type BaseCodeBoxProps = {
  language: string;
  className?: string;
  copyButtonLabel: ReactNode;
  copiedButtonLabel: ReactNode;
};

const BaseCodeBox: FC<PropsWithChildren<BaseCodeBoxProps>> = ({
  children,
  language,
  className,
  copyButtonLabel,
  copiedButtonLabel,
}) => {
  const [copied, copy] = useCopy();

  const containerRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => copy(containerRef.current?.textContent);

  const ButtonIcon = copied ? CopyIcon : CodeXmlIcon;

  const hideFooter = className?.includes('no-footer');

  return (
    <div className={styles.root}>
      <pre
        ref={containerRef}
        className={cn(styles.content, className)}
        tabIndex={0}
      >
        {transformCode(children as ReactElement<PropsWithChildren>, language)}
      </pre>

      {!language || hideFooter || (
        <div className={styles.footer}>
          <span className={styles.language}>{language}</span>

          <Button variant="copy" onClick={handleCopy} className={styles.action}>
            <ButtonIcon className="size-4" />
            {copied ? copiedButtonLabel : copyButtonLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BaseCodeBox;
