export type PostLayoutType = 'grid' | 'list';

/**
 * tabs 栏默认可预览类型
 */
export type BlogPreviewType =
  | 'all'
  | 'news'
  | 'announcements'
  | 'release'
  | 'vulnerability'
  | 'other';

/**
 * 博客文章的所有分类
 * 基于i18n中定义的categories字段
 * @type {import('@/i18n/messages/i18n.d.ts')}
 */
export type BlogCategory = IntlMessageKeys<'layouts.blog.categories'>;

export type BlogPost = {
  title: string;
  author: string;
  username?: string;
  category: string;
  categories: Array<BlogCategory>;
  date: Date;
  slug: string;
};

export type BlogData = {
  posts: Array<BlogPost>;
  categories: Array<BlogCategory>;
};

export type BlogPagination = {
  next: number | null;
  prev: number | null;
  pages: number;
  total: number;
};

export type BlogPostsRSC = {
  posts: Array<BlogPost>;
  pagination: BlogPagination;
  category?: string;
};

export type LinkTab = {
  key: string;
  label: string;
  link: string;
};

export type ExtendedType = {
  category: string;
  coverImage?: string;
  excerpt?: string;
  description?: string;
} & BlogPost;

export type ArticleColumn = {
  title: string;
  author: string;
  username?: string;
  category: string;
  date: Date;
  slug: string;
  coverImage?: string;
  viewCount?: number;
  commentCount?: number;
  description?: string;
};
