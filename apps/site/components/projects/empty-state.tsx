import { memo } from 'react';
import { Search } from 'lucide-react';

interface EmptyStateProps {
  searchTerm?: string;
  category?: string;
}

export const EmptyState = memo(({ searchTerm, category }: EmptyStateProps) => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-4 rounded-full bg-gray-100 p-4">
        <Search className="h-8 w-8 text-gray-400" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-xl font-medium">No projects found</h3>
      {searchTerm ? (
        <p className="max-w-md text-gray-500">
          We couldn't find any projects matching "{searchTerm}"
          {category && category !== 'all' ? ` in the ${category} category` : ''}
          .
        </p>
      ) : (
        <p className="max-w-md text-gray-500">
          We couldn't find any projects
          {category && category !== 'all' ? ` in the ${category} category` : ''}
          .
        </p>
      )}
      <p className="mt-2 text-gray-500">
        Try adjusting your search or filter criteria.
      </p>
    </div>
  );
});
