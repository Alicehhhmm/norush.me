import { ScrollArea } from '@/components/ui/scroll-area';
import { Toc as ArticleToc, type TOCItem } from '@nw/ui/common/Toc';

interface ArticleAsideProps {
  toc: TOCItem[];
}

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
