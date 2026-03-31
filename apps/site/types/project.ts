export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: Array<string>;
  technologies: Array<string>;
  forks: number;
  stars: number;
  image: string;
  avatar: string;
  author: string;
  createdAt: string;
};

export type ProjectsResponse = {
  projects: Array<Project>;
  total: number;
  hasMore: boolean;
};

export type SortOption = 'trending' | 'newest' | 'popular' | 'forks' | 'stars';

export type CategoryOption =
  | 'all'
  | 'apps'
  | 'games'
  | 'sites'
  | 'components'
  | 'blocks'
  | 'starters';

export type ProjectFilters = {
  search: string;
  category: CategoryOption;
  sort: SortOption;
  page: number;
  limit: number;
};

export type FilterOption = {
  id: string;
  label: string;
};

export type DemoProjectType = {
  title: string;
  description: string;
  image: string;
  technologies: Array<string>;
};
