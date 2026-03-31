import { Toc as ArticleToc, type TOCItem } from '@nw/ui/common/Toc';

import { ScrollArea } from '@/components/ui/scroll-area';

type ArticleAsideProps = {
  toc: Array<TOCItem>;
};

export const ArticleAside = ({ toc }: ArticleAsideProps) => {
  return (
    <ScrollArea className="scrollbar-hide pt-10">
      <h3 className="text-foreground mb-4 pl-3 text-sm font-semibold">
        ON THIS PAGE
      </h3>
      <ArticleToc directories={toc} maxLayer={4} />
    </ScrollArea>
  );
};

export default ArticleAside;
